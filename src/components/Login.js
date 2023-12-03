import { auth } from "../utils/firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
    signInWithPopup(auth, provider)
      .then((result) => {
      })
      .catch((error) => {});
  };

  return (
    <div>
      Login
      <button onClick={handleLogin}>Login</button>
    </div>
  )

}

export default Login