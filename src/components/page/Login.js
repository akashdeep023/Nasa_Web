import React, { useRef } from "react";
import { useState } from "react";
import {
	checkValidSignInFrom,
	checkValidSignUpFrom,
} from "../../utils/validate.js";

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase.js";
import { addUser } from "../../utils/slices/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setForgotPass } from "../../utils/slices/configSlice.js";
import ForgotPass from "../subComponents/ForgotPass.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [errorMsg, setErrorMsg] = useState(null);
	const [passwordType, setPasswordType] = useState(true);
	const [name, setName] = useState("");
	const fullName = useRef(null);
	const email = useRef(null);
	const password = useRef(null);
	const forgotPass = useSelector((store) => store.config.forgotPass);
	const dispatch = useDispatch();
	const toggleForm = () => {
		// Toggle SignUp/SignIn
		setIsSignIn(!isSignIn);
	};
	const handleSignInFormValidation = (e) => {
		const message = checkValidSignInFrom(
			email.current.value,
			password.current.value
		); // Validate Form
		setErrorMsg(message); // Set error message
		if (message) return;
		toast.loading("Wait until you SignIn");
		e.target.disabled = true;
		signInWithEmailAndPassword(
			auth,
			email.current.value,
			password.current.value
		)
			.then((userCredential) => {
				// Signed in
				// const user = userCredential.user;
				toast.dismiss();
				toast.success("User has been Signed In");
				e.target.disabled = false;
			})
			.catch((error) => {
				setErrorMsg("Error : " + error.code);
				toast.dismiss();
				toast.error("Error : " + error.code);
				e.target.disabled = false;
			});
	};
	const handleSignUpFormValidation = (e) => {
		const message = checkValidSignUpFrom(
			fullName.current.value,
			email.current.value,
			password.current.value
		); // Validate Form
		setErrorMsg(message); // Set error message
		if (message) return;
		toast.loading("Wait until you SignUp");
		e.target.disabled = true;
		// Sign Up
		createUserWithEmailAndPassword(
			auth,
			email.current.value,
			password.current.value
		)
			.then((userCredential) => {
				// Signed up
				const user = userCredential.user;
				updateProfile(user, {
					displayName: fullName.current.value,
				}).then(() => {
					// Profile updated!
					const { uid, email, displayName } = auth.currentUser;
					dispatch(
						addUser({
							uid: uid,
							email: email,
							displayName: displayName,
						})
					);
					toast.dismiss();
					toast.success("User has been Signed Up");
					e.target.disabled = false;
				});
			})
			.catch((error) => {
				setErrorMsg("Error : " + error.code);
				toast.dismiss();
				toast.error("Error : " + error.code);
				e.target.disabled = false;
				console.log(error);
			});
	};

	const handleName = (name) => {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		setName(name);
	};
	const handleForgotPass = () => {
		dispatch(setForgotPass(true));
		const scrollY =
			document.documentElement.style.getPropertyValue("--scroll-y");
		const body = document.body;
		body.style.position = "fixed";
		body.style.width = "100vw";
		body.style.top = `-${scrollY}`;
	};
	return (
		<div className="bg-black/50">
			<div className="min-h-[100vh] w-full h-full">
				<img
					className="relative w-full min-h-[100vh] object-cover object-left-top"
					src="/nasa-bg.jpg"
					alt="bgImg"
				/>
			</div>
			<div className="w-full flex justify-center">
				<form
					className="absolute px-9 sm:px-16 py-12 text-white font-bold max-w-[450px] sm:w-[450px] min-h-[550px]  backdrop-blur-2xl border border-gray-200/50 top-36 left-auto rounded-md flex flex-col justify-start gap-5"
					onSubmit={(event) => event.preventDefault()}
				>
					<h1 className="rounded-sm text-4xl font-bold text-white mb-4">
						{isSignIn ? "Sign In" : "Sign Up"}
					</h1>
					{!isSignIn && (
						<input
							ref={fullName}
							type="text"
							placeholder="Full Name"
							className="rounded-md w-full p-4 sm:p-5 font-semibold bg-black/50 border border-gray-200/50"
							value={name}
							onChange={(e) => handleName(e.target.value)}
						/>
					)}
					<input
						ref={email}
						type="text"
						placeholder="Email Address"
						className="rounded-md w-full p-4 sm:p-5 font-semibold bg-black/50 border border-gray-200/50"
					/>
					<div className="relative">
						<span
							onClick={() => {
								setPasswordType(!passwordType);
							}}
							className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-200/50 cursor-pointer w-5 flex justify-center mr-2"
						>
							{passwordType ? <FaEye /> : <FaEyeSlash />}
						</span>
						<input
							ref={password}
							type={passwordType ? "password" : "text"}
							placeholder="Password"
							className="rounded-md w-full p-4 sm:p-5 font-semibold bg-black/50 border border-gray-200/50"
						/>
					</div>
					{errorMsg && <p className="text-red-500">{errorMsg}</p>}

					<button
						type="submit"
						className="rounded-sm w-full p-4 sm:p-5 my-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-800"
						onClick={
							isSignIn
								? handleSignInFormValidation
								: handleSignUpFormValidation
						}
					>
						{isSignIn ? "Sign In" : "Sign Up"}
					</button>
					{isSignIn && (
						<p
							onClick={handleForgotPass}
							className="text-center font-semibold cursor-pointer"
						>
							Forgot Password?
						</p>
					)}
					<div className="w-full h-full"></div>
					<p className=" font-normal text-gray-300/80">
						{isSignIn ? "New to Nasa" : "Already registered"}
						&nbsp;&nbsp;&nbsp;&nbsp;
						<b
							href="#"
							className="text-white font-bold cursor-pointer hover:underline"
							onClick={() => {
								toggleForm();
								setErrorMsg(null);
							}}
						>
							{isSignIn ? "Sign Up Now" : "Sign In Now"}
						</b>
					</p>
				</form>
			</div>
			{forgotPass && (
				<div className="fixed top-0 backdrop-blur-sm p-2 w-full h-full flex items-center justify-center z-50">
					<ForgotPass />
				</div>
			)}
		</div>
	);
};

export default Login;
