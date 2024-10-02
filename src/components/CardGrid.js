import React from "react";
import Card from "./Card";
import { planetsData } from "../utils/constants/constant";

const CardGrid = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
			{planetsData.map((planet, index) => (
				<Card key={index} planet={planet} />
			))}
		</div>
	);
};

export default CardGrid;
