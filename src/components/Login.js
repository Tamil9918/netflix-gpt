import { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import Header from "./Header";
import { addUser } from "../utils/userSlice";
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMesssage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleSingInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    // console.log(email.current.value, password.current.value);
    //validate the form data
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMesssage(msg);
    if (msg) return;
    if (!isSignIn) {
      //Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("success", user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://www.shutterstock.com/image-vector/flat-vector-cute-cartoon-panda-600nw-2343798945.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMesssage(error.message);
            });

          // ...
        })
        .catch((error) => {
          console.log("error", error);
          setErrorMesssage(error.code + "-" + error.message);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("resgistered user", user);
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          console.log("error in sign in", error);
          setErrorMesssage(error.code + "-" + error.message);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_large.jpg"
          alt="login"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? " Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-4" onClick={toggleSingInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already a registered User? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
