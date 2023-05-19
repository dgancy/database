import "./App.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import NavbarLogged from "./Components/NavBar/NavbarLogged";
import NavbarLogout from "./Components/NavBar/NavbarLogout";
import { user } from "./Components/Log";

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

function App() {
  return (
    <div className="App">
      <NavbarLogged />
    </div>
  );
}

export default App;
export { auth, provider };
