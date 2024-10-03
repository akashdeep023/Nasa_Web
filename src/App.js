import React, { lazy, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Login from "./components/page/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/page/PrivateRoute";
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const Planets = lazy(() => import("./components/page/Planets"));
const Contact = lazy(() => import("./components/page/Contact"));
const AboutUs = lazy(() => import("./components/page/AboutUs"));
const Home = lazy(() => import("./components/page/Home"));

function App() {
	// setProperty
	useEffect(() => {
		const handle = () => {
			document.documentElement.style.setProperty(
				"--scroll-y",
				`${window.scrollY}px`
			);
		};
		window.addEventListener("scroll", handle);
		return () => window.removeEventListener("scroll", handle);
	}, []);
	return (
		<Provider store={appStore}>
			<div className="min-h-[calc(100vh-97px)] bg-gradient-to-br to-gray-900 from-gray-950">
				<ToastContainer
					position="top-left"
					autoClose={3000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
					stacked
					limit={3}
					toastStyle={{ border: "1px solid #dadadaaa" }}
				/>
				<BrowserRouter>
					<Header />
					<div className="text-white min-h-[calc(100vh-97px)]">
						<Suspense fallback={<Loading />}>
							<Routes>
								<Route path="/login" element={<Login />} />
								<Route path="/" element={<Home />} />
								<Route path="/about-us" element={<AboutUs />} />
								<Route
									path="/contact-us"
									element={<Contact />}
								/>
								<Route
									path="/planets"
									element={
										<PrivateRoute>
											<Planets />
										</PrivateRoute>
									}
								/>
								<Route path="*" element={<PageNotFound />} />
							</Routes>
						</Suspense>
					</div>
					<Footer />
				</BrowserRouter>
			</div>
		</Provider>
	);
}
export default App;
