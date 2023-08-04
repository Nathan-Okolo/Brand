import About from "./components/About.jsx";
import AllInOne from "./components/AllInOne.jsx";
import Hero from "./components/Hero.jsx";
import Navbar from "./components/Navbar.jsx";
import Support from "./components/Support.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";
function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<About />
			<Support />
			<AllInOne />
			<Pricing />
			<Footer />
		</div>
	);
}

export default App;
