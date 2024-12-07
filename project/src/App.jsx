import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Details from "./components/Details.jsx";
import Chapter1 from "./components/Chapter1.jsx";
import Chapter2 from "./components/Chapter2.jsx";

function App() {
    return (
        <>
            <Header />

            <main className="container">
                <Details />
                <Chapter2 />
                <Chapter1 />
            </main>

            <Footer />
        </>
    );
}

export default App;
