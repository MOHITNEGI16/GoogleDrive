import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import "./Css/App.css";
import { useState } from "react";
import { auth, googleProvider } from "./components/firebase";

function App() {
  const [login, setLogin] = useState(null);
  const checkSignin = () => {
    auth.signInWithPopup(googleProvider)
            .then(({ user }) => setLogin(user))
            .catch(err => alert(err))
  }
  return (
    <>
      {login ? (
        <>
          <div id="submitting"></div>
          <Navbar userImage={login.photoURL} />
          <div className="App">
            <Sidebar />
            <Main />
          </div>
        </>
      ) : (
        <div className="login_Div">
        <img src="https://i.pinimg.com/564x/f5/49/9f/f5499f238b73bb370ff9c05024a50066.jpg" alt="googleDrive"/>

        <button onClick={checkSignin}>Google Drive Login</button>
        </div>
      )}
    </>
  );
}

export default App;
