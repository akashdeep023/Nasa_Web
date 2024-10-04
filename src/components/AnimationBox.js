import React from "react";
import { planetsData } from "../utils/constants/constant";

const AnimationBox = () => {
	return (
		<div class="w-full overflow-hidden my-4 sm:my-8 flex flex-col gap-4">
			<div class="flex w-fit gap-4 select-none left-to-right">
				{planetsData.map((planet, idx) => {
					return (
						<div class="w-fit relative bg-black/70 p-5 rounded-md group">
							<span class="pr-5 text-nowrap">
								<span
									class="pr-5 text-nowrap"
									key={planet + idx}
								>
									{planet.star_name}
								</span>
							</span>
						</div>
					);
				})}
				{planetsData.map((planet, idx) => {
					return (
						<div class="w-fit relative bg-black/70 p-5 rounded-md group">
							<span class="pr-5 text-nowrap">
								<span
									class="pr-5 text-nowrap"
									key={planet + idx}
								>
									{planet.star_name}
								</span>
							</span>
						</div>
					);
				})}
			</div>
			<div class="flex w-fit gap-4 select-none right-to-left">
				{planetsData.map((planet, idx) => {
					return (
						<div class="w-fit relative bg-black/70 p-5 rounded-md group">
							<span class="pr-5 text-nowrap">
								<span
									class="pr-5 text-nowrap"
									key={planet + idx}
								>
									{planet.star_name}
								</span>
							</span>
						</div>
					);
				})}
				{planetsData.map((planet, idx) => {
					return (
						<div class="w-fit relative bg-black/70 p-5 rounded-md group">
							<span class="pr-5 text-nowrap">
								<span
									class="pr-5 text-nowrap"
									key={planet + idx}
								>
									{planet.star_name}
								</span>
							</span>
						</div>
					);
				})}
			</div>
			<div class="flex w-fit gap-4 select-none left-to-right">
				{planetsData.map((planet, idx) => {
					return (
						<div class="w-fit relative bg-black/70 p-5 rounded-md group">
							<span class="pr-5 text-nowrap">
								<span
									class="pr-5 text-nowrap"
									key={planet + idx}
								>
									{planet.star_name}
								</span>
							</span>
						</div>
					);
				})}
				{planetsData.map((planet, idx) => {
					return (
						<div class="w-fit relative bg-black/70 p-5 rounded-md group">
							<span class="pr-5 text-nowrap">
								<span
									class="pr-5 text-nowrap"
									key={planet + idx}
								>
									{planet.star_name}
								</span>
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default AnimationBox;
