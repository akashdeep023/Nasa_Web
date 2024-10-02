import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

const Card = ({ planet }) => {
	return (
		<div className="relative bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-lg overflow-hidden p-6 text-center w-full max-w-md mx-auto transition-transform transform hover:scale-105">
			<h2 className="text-3xl font-bold text-white mb-4">
				{planet.planet_name}
			</h2>
			<p className="text-gray-300 mb-4 line-clamp-2 h-12">
				{planet.atmospheric_conditions.notes}
			</p>
			<div className="relative w-full h-32 sm:h-48 md:h-72 mb-12">
				<div
					className="absolute inset-0 bg-cover bg-center opacity-40"
					style={{ backgroundImage: `url('${planet.image}')` }}
				></div>
			</div>
			<div className="mt-4 w-full absolute bottom-4 left-4">
				<Link to={"/#"}>
					<button className="flex gap-2 justify-center items-center px-5 h-12 border border-gray-400 hover:border-gray-100 rounded-full group">
						<span className="text-sm sm:text-base">Explore</span>
						<GoArrowRight className="text-white text-lg sm:text-xl relative group-hover:translate-x-1 group-hover:-rotate-12 origin-left transition-all" />
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Card;
