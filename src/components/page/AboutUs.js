import React, { Fragment } from "react";
import { aboutDetails } from "../../utils/constants/constant";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const AboutUs = () => {
	return (
		<div className="py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12">
			<h2 className="font-bold text-2xl text-center sm:text-3xl md:text-4xl mb-2 sm:mb-3 md:mb-4 w-full text-white p-4 ps-6">
				About Us
			</h2>
			<div className="flex flex-col items-center w-full">
				<div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2">
					{aboutDetails.description.map((data, idx) => {
						return (
							<Fragment key={"about" + idx}>
								<p className="leading-8 opacity-80 mb-4">
									{data}
								</p>
							</Fragment>
						);
					})}
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

export default AboutUs;
