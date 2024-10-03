import React from "react";
import { GiSpaceSuit } from "react-icons/gi";

const Loading = () => {
	return (
		<div className="px-5 sm:px-8 md:px-11 py-6 sm:py-8 flex justify-center items-center h-[50vh]">
			<div className="font-semibold">
				<GiSpaceSuit className="text-3xl sm:text-4xl animate-bounce duration-75" />
			</div>
		</div>
	);
};

export default Loading;
