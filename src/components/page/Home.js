import { useSelector } from "react-redux";
import Confirm from "../subComponents/Confirm";
// import CardGrid from "../CardGrid";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router-dom";

const Home = () => {
	const confirm = useSelector((store) => store.config?.confirm);
	return (
		<div className="h-full min-w-screen text-white relative">
			<div className="absolute top-0 w-full h-[calc(100vh-97px)] bg-gradient-to-br to-gray-900 from-gray-950">
				<img
					src="/earth.jpg"
					alt="earth"
					className="w-full h-full object-cover object-top mix-blend-luminosity"
				/>
			</div>
			<div className="text-white z-10 relative py-12 w-full h-[calc(100vh-97px)]">
				<div className="flex justify-center items-center">
					<div className="w-full max-w-md flex flex-col items-center gap-3 sm:gap-7">
						<h1 className="text-2xl sm:text-4xl font-bold">
							Welcome to NASA Web
						</h1>
						<p className="">Discover the universe's secrets</p>
					</div>
				</div>
				<div className="origin-left ml-6 sm:ml-12 -rotate-90 flex gap-12 justify-between items-center absolute bottom-1/3 translate-y-1/2 opacity-60 left-0">
					<Link
						to={"/planets"}
						className="font-semibold text-lg hover:underline underline-offset-4"
					>
						Planets
					</Link>
					<Link
						to={"/space"}
						className="font-semibold text-lg hover:underline underline-offset-4"
					>
						Space
					</Link>
				</div>
				<div className="flex flex-col h-24 justify-between items-center mt-5 absolute bottom-1/3 left-1/2 -translate-x-1/2">
					<button className="w-32 h-12 border border-gray-400 hover:border-gray-100 rounded-full">
						Explore Now
					</button>
					<GoArrowDown className="text-white text-3xl animate-bounce duration-75" />
				</div>
				<div className="origin-right mr-6 sm:mr-12 rotate-90 flex gap-1 justify-between items-center absolute bottom-10 opacity-40 right-0">
					<span>01</span>
					<div className="w-32 border border-gray-400 hover:border-gray-100 rounded-full"></div>
					<span>03</span>
				</div>
			</div>
			{/* <CardGrid /> */}
			{confirm && (
				<div className="fixed top-0 backdrop-blur-sm p-2 w-full h-full flex items-center justify-center z-50">
					<Confirm />
				</div>
			)}
		</div>
	);
};

export default Home;
// px-5 sm:px-8 md:px-11 py-6 sm:py-8
