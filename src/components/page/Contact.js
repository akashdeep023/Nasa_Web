import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";
import { contactDetails } from "../../utils/constants/constant";
import {
	BiCurrentLocation,
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoTwitter,
	BiLogoYoutube,
	BiPhoneCall,
} from "react-icons/bi";

const Contact = () => {
	return (
		<div className="py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12">
			<h2 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 w-full text-white p-4 ps-6">
				Contact Us
			</h2>
			<div className="flex flex-col items-center w-full gap-6">
				<div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
					<p className="flex gap-4 items-start">
						<span className="font-semibold">
							<BiCurrentLocation className="h-5 w-5 sm:h-7 sm:w-7" />
						</span>
						<span>-</span>
						<span>{contactDetails.address}</span>
					</p>
				</div>
				<div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
					<p className="flex gap-4 items-start">
						<span className="font-semibold">
							<BiPhoneCall className="h-5 w-5 sm:h-7 sm:w-7" />
						</span>
						<span>-</span>
						<span>
							{contactDetails.mobile[0]}
							{", "}
							{contactDetails.mobile[1]}
						</span>
					</p>
				</div>
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
				<div className="w-full flex justify-center mt-6">
					<Link to={"/"}>
						<button className="flex gap-2 justify-center items-center px-5 h-12 border border-gray-400 hover:border-gray-100 rounded-full group">
							<GoArrowLeft className="text-white text-lg sm:text-xl relative group-hover:-translate-x-2 transition-all" />
							<span className="text-sm sm:text-base">
								Back to Home
							</span>
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
