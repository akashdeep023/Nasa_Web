import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="px-5 sm:px-8 md:px-11 py-6 sm:py-8">
			<div className="w-full h-[50vh] flex justify-center items-center flex-col gap-3">
				<h2 className="text-2xl font-bold"> Page Not Found</h2>
				<p className="font-semibold text-6xl">404</p>
				<Link to={"/home"}>Home</Link>
			</div>
		</div>
	);
};

export default PageNotFound;
