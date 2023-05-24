/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const cors = require('cors')({origin: true});
const app = admin.initializeApp()
const { v4: uuidv4 } = require('uuid');



// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.newUserSignup = functions.auth.user().onCreate(user =>{
    admin.firestore().collection("users").doc(user.uid).set({
        email :user.email,
        role: 1,
    })
    logger.info('User created',user.email,user.uid);
});
exports.getUser = functions.https.onCall( async (data,context)=>{
    if(!context.auth){
        throw new functions.https.HttpsError("unauthenticated",'only auth')
    }
    const userDocRef = admin.firestore().collection("users").doc(context.auth.uid)
    logger.log(context.auth.uid)
    const retdata = await userDocRef.get().then(doc=>{
        if(doc.exists){
            return doc.data();
        }else{
            throw new functions.https.HttpsError("not-found","Not exist yet")
        }
    })
    return retdata;
})
exports.getFoods = functions.https.onCall(async (data,context) =>{
    const foodRef = await admin.firestore().collection("foods").get()
    const foods = []
    foodRef.forEach((doc)=>{
        foods.push({
            id: doc.id,
            data:doc.data()
        })
    });
    return foods;
});

exports.userOnDelete = functions.auth.user().onDelete(user=>{
    const doc = admin.firestore().collection('users').doc(user.uid)
    return doc.delete();
})

exports.submitOrder = functions.https.onCall(async (data,context) =>{
    if(!context.auth){
        throw new functions.https.HttpsError("unauthenticated",'only auth')
    }
    const timestamp = admin.firestore.Timestamp.now();    
    admin.firestore().collection("orders").doc(uuidv4()).set({
        userId : context.auth.uid,
        orderStatus: "Függőben",
        timestamp: timestamp,
        data,
    })
    return "success";
})

exports.getUserOrders = functions.https.onCall(async (data,context)=>{
    if(!context.auth){
        throw new functions.https.HttpsError("unauthenticated",'only auth')
    }
    const user = await admin.firestore().collection("users").doc(context.auth.uid).get();
    var userOrdersRef = admin.firestore().collection("orders")
    if(user.data().role == 1){
        userOrdersRef = userOrdersRef.where("userId","==",context.auth.uid)
    }
    const userOrders = await userOrdersRef.get()
    
    const orders = []
    userOrders.forEach((doc)=>{
        data = doc.data()
        orders.push({id: doc.id,data})
    })
    return orders;
})

exports.acceptOrder = functions.https.onCall(async (data,context) =>{
    if(!context.auth){
        throw new functions.https.HttpsError("unauthenticated",'only auth')
    }
    const user = await admin.firestore().collection("users").doc(context.auth.uid).get();
    if(user.data().role != 2){
        throw new functions.https.HttpsError("permission-denied","Forbidden")
    }
    const orderId = data.orderId;
    const order =  (await admin.firestore().collection("orders").doc(orderId).get()).data()
    order.orderStatus = "Elfogadva"
    admin.firestore().collection("orders").doc(orderId).set(order);
})


