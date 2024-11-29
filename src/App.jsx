import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import MainSection from "./components/MainSection";
import NewNavbar from "./components/NewNavbar";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <NewNavbar />
      <main style={{ backgroundColor: "#221f1f" }}>
        <MainSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
