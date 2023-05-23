import "./App.css";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import NavbarView from "./Components/NavbarView";
import { getFunctions } from "firebase/functions";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Foods from "./Components/Foods";
import Cart from "./Components/Cart";
import Orders from "./Components/Orders";
const firebaseConfig = {
  apiKey: "AIzaSyAzTtygQPwBeQBZoKR1UqJhEzwzDeuwokQ",
  authDomain: "adatbazis-a6c6f.firebaseapp.com",
  projectId: "adatbazis-a6c6f",
  storageBucket: "adatbazis-a6c6f.appspot.com",
  messagingSenderId: "331372587861",
  appId: "1:331372587861:web:c2f64a7cd1652ad3871ddc",
  measurementId: "G-2YR2PZFG90",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const functions = getFunctions(app);

function App() {
    return (
      <div class="App"> 
        <Router>
        <NavbarView />
        <Routes>
        <Route path="/" element={<Foods />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
        </Router>
      </div>
    );
}

export default App;
export { auth, provider, functions };
