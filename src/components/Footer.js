import React from "react";
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoYoutube,
} from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="bg-gradient-to-br to-gray-900 from-gray-950">
			<div className="w-full px-2  flex flex-col items-start justify-center gap-8 text-white">
				<div className="mt-6 py-4 w-full flex flex-col sm:flex-row justify-between items-center px-0 sm:px-[10%]">
					<span className="text-white font-bold text-xl tracking-widest mb-4 sm:mb-0 sm:w-1/4">
						<img src="/nasa-logo.svg" className="h-14" />
					</span>
					<div className="flex flex-wrap justify-center sm:justify-start font-light underline decoration-from-font w-full">
						<Link
							to={"/"}
							className="w-36 text-sm sm:w-56 sm:h-12 h-8 flex items-center md:justify-start justify-center"
						>
							<span className="cursor-pointer hover:text-gray-400">
								Home
							</span>
						</Link>
						<Link
							to={"/login"}
							className="w-36 text-sm sm:w-56 sm:h-12 h-8 flex items-center md:justify-start justify-center"
						>
							<span className="cursor-pointer hover:text-gray-400">
								Sign In
							</span>
						</Link>
						<Link
							to={"/about-us"}
							className="w-36 text-sm sm:w-56 sm:h-12 h-8 flex items-center md:justify-start justify-center"
						>
							<span className="cursor-pointer hover:text-gray-400">
								About Us
							</span>
						</Link>
						<Link
							to={"/contact-us"}
							className="w-36 text-sm sm:w-56 sm:h-12 h-8 flex items-center md:justify-start justify-center"
						>
							<span className="cursor-pointer hover:text-gray-400">
								Contact Us
							</span>
						</Link>
						<Link
							to={"/planets"}
							className="w-36 text-sm sm:w-56 sm:h-12 h-8 flex items-center md:justify-start justify-center"
						>
							<span className="cursor-pointer hover:text-gray-400">
								Planets
							</span>
						</Link>
						<Link
							to={"https://nasa-chatbot.streamlit.app/"}
							target="_blank"
							className="w-36 text-sm sm:w-56 sm:h-12 h-8 flex items-center md:justify-start justify-center"
						>
							<span className="cursor-pointer hover:text-gray-400">
								Chat Bot
							</span>
						</Link>
					</div>
				</div>
				<div className="border-t border-gray-600 py-4 w-full flex flex-col sm:flex-row justify-between items-center px-10 sm:px-[10%]">
					<span>All rights reserved.</span>
					<div className="flex flex-nowrap h-14 w-fit items-center justify-center">
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							rel="noreferrer"
							href="https://www.facebook.com/NASA"
						>
							<BiLogoFacebook className="h-5 w-5 sm:h-7 sm:w-7 m-1 sm:hover:h-9 hover:opacity-60 sm:hover:w-9 transition-all" />
						</a>
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							rel="noreferrer"
							href="https://www.instagram.com/nasa/"
						>
							<BiLogoInstagram className="h-5 w-5 sm:h-7 sm:w-7 m-1 sm:hover:h-9 hover:opacity-60 sm:hover:w-9 transition-all" />
						</a>
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							rel="noreferrer"
							href="https://x.com/NASA"
						>
							<BiLogoTwitter className="h-5 w-5 sm:h-7 sm:w-7 m-1 sm:hover:h-9 hover:opacity-60 sm:hover:w-9 transition-all" />
						</a>
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							rel="noreferrer"
							href="https://www.youtube.com/@NASA"
						>
							<BiLogoYoutube className="h-5 w-5 sm:h-7 sm:w-7 m-1 sm:hover:h-9 hover:opacity-60 sm:hover:w-9 transition-all" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
