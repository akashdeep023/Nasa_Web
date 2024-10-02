import React, { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import HeaderHide from "./subComponents/HeaderHide";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const [headerhide, setHeaderHide] = useState(true);
	const imgRef = useRef();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				dispatch(
					addUser({
						uid: uid,
						email: email,
						displayName: displayName,
					})
				);
				navigate("/");
			} else {
				dispatch(removeUser());
				navigate("/login");
			}
		});
		return () => unsubscribe();
	}, []);

	return (
		<div className="bg-gradient-to-br to-gray-900 from-gray-950 sticky top-0  z-50 h-24 px-3 sm:px-[10%] filter flex justify-between items-center w-full backdrop-blur-3xl">
			<a
				href="/"
				className="text-white font-bold text-xl tracking-widest"
			>
				NASA
			</a>
			{user ? (
				<div className="relative flex place-items-center justify-center">
					{headerhide ? (
						<MdOutlineArrowDropUp className="text-lg mt-1 opacity-50 text-white" />
					) : (
						<MdOutlineArrowDropDown className="text-lg mt-1 opacity-50 text-white" />
					)}
					<BiSolidUser
						ref={imgRef}
						color="white"
						className="ml-1 h-7 w-7 sm:h-9 sm:w-9 rounded-lg cursor-pointer contrast-200"
						onClick={() => setHeaderHide(!headerhide)}
					/>
					<div
						className={
							headerhide
								? "invisible opacity-0 scale-50 transition-all"
								: "inline-block opacity-100 scale-100 transition-all"
						}
					>
						<HeaderHide
							setHeaderHide={setHeaderHide}
							imgRef={imgRef}
						/>
					</div>
				</div>
			) : (
				<Link to={"/login"} className="text-white">
					Sign In
				</Link>
			)}
		</div>
	);
};

export default Header;
