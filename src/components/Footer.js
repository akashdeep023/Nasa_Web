import React from "react";
import {
	BiLogoFacebook,
	BiLogoGithub,
	BiLogoInstagram,
	BiLogoLinkedin,
} from "react-icons/bi";

const Footer = () => {
	return (
		<div className="border-t border-blue-950 bg-color">
			<div className=" w-full ps-10 sm:ps-[10%] py-10 sm:py-16 flex flex-col items-start justify-center gap-8 text-white">
				<div>Question? Call 000-0000-0000</div>
				<ul className="flex flex-wrap justify-start font-light underline decoration-from-font">
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8  ">
						<span className="cursor-pointer hover:text-gray-400">
							FAQ
						</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
						<span className="cursor-pointer hover:text-gray-400">
							Privacy
						</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
						<span className="cursor-pointer hover:text-gray-400">
							Help Center
						</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
						<span className="cursor-pointer hover:text-gray-400">
							Term & Conditions
						</span>
					</li>
					<li className="w-36 text-sm sm:w-56 sm:h-12 h-8 ">
						<span className="cursor-pointer hover:text-gray-400">
							Corporate Information
						</span>
					</li>
				</ul>
				<div className="flex flex-nowrap items-center justify-between">
					<div className="flex flex-nowrap h-14 w-full items-center justify-center">
						<a
							className="ms-1 h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							href="https://www.linkedin.com/in/"
						>
							<BiLogoLinkedin className="h-6 w-6 sm:h-8 sm:w-8 m-1 sm:hover:h-9 hover:opacity-60 sm:hover:w-9 transition-all" />
						</a>
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							href="https://www.instagram.com/"
						>
							<BiLogoInstagram className="h-6 w-6 sm:h-8 sm:w-8 m-1 sm:hover:h-9 hover:opacity-60 sm:hover:w-9 transition-all" />
						</a>
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							href="https://github.com/"
						>
							<BiLogoGithub className="h-6 w-6 sm:h-8 sm:w-8 m-1 sm:hover:h-9 hover:opacity-60 sm:hover:w-9 transition-all" />
						</a>
						<a
							className="h-10 w-10 sm:h-14 sm:w-14 flex items-center justify-center"
							target="_blank"
							href="https://www.facebook.com/"
						>
							<BiLogoFacebook className="h-6 w-6 sm:h-8 sm:w-8 m-1 sm:hover:h-9 hover:opacity-60 sm:hover:w-9 transition-all" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
