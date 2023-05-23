import "./App.css";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import NavbarLogged from "./Components/NavbarLogged";
import NavbarLogout from "./Components/NavbarLogout";
import { getFunctions } from "firebase/functions";

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
  console.log(localStorage.getItem("user"));
  if (localStorage.getItem("user")) {
    return (
      <div class="App">
        <NavbarLogged />
      </div>
    );
  }else{
  return (
    <div class="App">
      <NavbarLogout />
    </div>
  );
  }
}

export default App;
export { auth, provider, functions };
