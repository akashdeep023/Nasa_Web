import React, { useEffect, useRef, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/slices/userSlice";
import HeaderHide from "./subComponents/HeaderHide";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { FaUserAstronaut } from "react-icons/fa6";
import { AiOutlineHome, AiOutlineLogin } from "react-icons/ai";
import { BiHome, BiHomeSmile, BiSolidHomeSmile } from "react-icons/bi";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const [headerhide, setHeaderHide] = useState(true);
	const imgRef = useRef();
	const [head, setHead] = useState(true);
	let lastScrollTop = 0;
	useEffect(() => {
		const handle = () => {
			let scrollTop =
				window.pageYOffset || document.documentElement.scrollTop;
			if (scrollTop > lastScrollTop) {
				setHead(false);
			} else {
				setHead(true);
			}
			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
		};
		window.addEventListener("scroll", handle);
		return () => window.removeEventListener("scroll", handle);
	}, []);

	const path = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [path]);

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
				if (path.pathname === "/login") {
					navigate("/");
				}
			} else {
				dispatch(removeUser());
				if (path.pathname === "/planet") {
					navigate("/login");
				}
			}
		});
		return () => unsubscribe();
	}, [path, navigate, dispatch]);

	return (
		<div
			className={`bg-gradient-to-br to-gray-900 from-gray-950 transition-all duration-500 sticky z-50 h-24 px-5 sm:px-[10%] filter flex justify-between items-center w-full backdrop-blur-3xl ${
				head ? "top-0 " : "-top-full"
			}`}
		>
			<Link
				to="/"
				className="text-white font-bold text-xl tracking-widest"
			>
				NASA
			</Link>

			<div className="text-white flex justify-between items-center gap-4 sm:gap-8">
				<Link to={"/"} className="hover:scale-110 transition-all">
					<AiOutlineHome size={22} />
				</Link>
				{user ? (
					<div className="relative flex place-items-center justify-center">
						{headerhide ? (
							<MdOutlineArrowDropUp className="text-lg mt-1 opacity-50 text-white" />
						) : (
							<MdOutlineArrowDropDown className="text-lg mt-1 opacity-50 text-white" />
						)}
						<FaUserAstronaut
							ref={imgRef}
							color="white"
							className="ml-1 h-7 w-7 sm:h-8 sm:w-8 rounded-lg cursor-pointer contrast-200"
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
					<Link
						to={"/login"}
						className="group px-5 h-11 border border-gray-400 text-white hover:border-gray-100 rounded-full flex justify-center gap-2 items-center"
					>
						<AiOutlineLogin
							size={18}
							className="group-hover:translate-x-1 transition-all"
						/>
						<span>SignIn</span>
					</Link>
				)}
			</div>
		</div>
	);
};

export default Header;
