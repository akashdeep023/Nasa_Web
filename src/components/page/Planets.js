import React from "react";
import CardGrid from "../CardGrid";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const Planets = () => {
	return (
		<div className="h-full min-w-screen text-white relative py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12">
			<h2 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl w-full text-white p-4 ps-6">
				Planets
			</h2>
			<div className="text-white z-10 relative py-12 w-full h-full">
				<div className="flex justify-center items-center">
					<CardGrid />
				</div>
				<Link to={"/"} className="w-full flex justify-center mt-6">
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

export default Planets;
