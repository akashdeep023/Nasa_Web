import React, { lazy, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Login from "./components/page/Login";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import PageNotFound from "./components/PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
			<div className="">
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
								{/* <Route path="/about-us" element={<AboutUs />} />
								<Route path="/contact" element={<Contact />} />
								<Route
									path="/privacy-policy"
									element={<PrivacyPolicy />}
								/>
								<Route
									path="/terms-of-service"
									element={<TermsOfService />}
								/> */}
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
