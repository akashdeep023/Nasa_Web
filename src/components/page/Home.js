import { useSelector } from "react-redux";
import Confirm from "../subComponents/Confirm";

const Home = () => {
	const confirm = useSelector((store) => store.config?.confirm);
	return (
		<div className="min-h-screen min-w-screen text-white px-5 sm:px-8 md:px-11 py-6 sm:py-8 ">
			<div className="">home page</div>
			{confirm && (
				<div className="fixed top-0 backdrop-blur-sm p-2 w-full h-full flex items-center justify-center z-50">
					<Confirm />
				</div>
			)}
		</div>
	);
};

export default Home;
