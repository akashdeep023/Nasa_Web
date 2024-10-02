import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="px-5 sm:px-8 md:px-11 py-6 sm:py-8 h-[calc(100vh-97px)] bg-gradient-to-br to-gray-900 from-gray-950">
			<div className="w-full h-[50vh] flex justify-center items-center flex-col gap-3">
				<h2 className="text-2xl font-bold"> Page Not Found</h2>
				<p className="font-semibold text-6xl">404</p>
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
	);
};

export default PageNotFound;
