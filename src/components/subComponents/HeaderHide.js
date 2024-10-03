import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setConfirm } from "../../utils/slices/configSlice";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { AiOutlineLogout } from "react-icons/ai";
import { TbUserX } from "react-icons/tb";
const HeaderHide = ({ setHeaderHide, imgRef }) => {
	// const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);
	const menuRef = useRef();
	const handleSignOut = () => {
		toast.loading("Wait until you SignOut");
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				toast.dismiss();
				toast.success("User has been Signed Out");
			})
			.catch((error) => {
				// An error happened.
				// navigate("/error");
				toast.dismiss();
				toast.error("Something went wrong!");
			});
	};
	useEffect(() => {
		let handler = (e) => {
			if (
				!menuRef.current?.contains(e.target) &&
				!imgRef.current?.contains(e.target)
			) {
				setHeaderHide(true);
			}
		};

		document.addEventListener("mousedown", handler);
		return () => {
			document.removeEventListener("mousedown", handler);
		};
	}, []);
	const handleDeleteAc = () => {
		dispatch(setConfirm(true));
		setHeaderHide(true);
		const scrollY =
			document.documentElement.style.getPropertyValue("--scroll-y");
		const body = document.body;
		body.style.position = "fixed";
		body.style.width = "100vw";
		body.style.top = `-${scrollY}`;
	};

	return (
		<>
			<div
				ref={menuRef}
				className="absolute right-0 top-8 sm:top-10 bg-black/80 text-white border border-gray-300/30 p-8 rounded-lg w-48 flex flex-col gap-2 items-start z-[1000]"
			>
				<span className="w-full text-center border-b border-white mb-1 line-clamp-1">
					<span className="font-bold">Hi!</span>{" "}
					<span className="">{user?.displayName?.split(" ")[0]}</span>
				</span>
				<button
					className="w-full hover:bg-gray-400 hover:text-black rounded-3xl border-b p-2 ps-4 flex gap-2 items-center"
					onClick={handleSignOut}
				>
					<AiOutlineLogout />
					<span>Logout</span>
				</button>
				<button
					className="w-full hover:bg-gray-400 hover:text-black rounded-3xl border-b p-2 ps-4 flex gap-2 items-center"
					onClick={handleDeleteAc}
				>
					<TbUserX size={18} />
					<span>Delete AC</span>
				</button>
			</div>
		</>
	);
};
export default HeaderHide;
