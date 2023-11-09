import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from "./Components/HomeContainer/HomeContainer";
import ContactContainer from "./Components/ContactContainer/ContactContainer";
import WhyContainer from "./Components/WhyContainer/WhyContainer";
import InsuranceContainer2 from "./Components/InsuranceContainer/InsuranceContainer2";
import ServicesContainer2 from "./Components/ServicesContainer/ServicesContainer2";
import ServicesContainer3 from "./Components/ServicesContainer/ServicesContainer3";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/why" element={<WhyContainer />} />
          <Route path="/services" element={<ServicesContainer2 />} />
          <Route path="/services2" element={<ServicesContainer3 />} />
          <Route path="/insurance" element={<InsuranceContainer2 />} />
          <Route path="/contact" element={<ContactContainer />} />

          <Route path="/HighPerformance" element={<HomeContainer />} />
          <Route path="/HighPerformance/why" element={<WhyContainer />} />
          <Route
            path="/HighPerformance/services"
            element={<ServicesContainer2 />}
          />
          <Route
            path="/HighPerformance/insurance"
            element={<InsuranceContainer2 />}
          />
          <Route
            path="/HighPerformance/contact"
            element={<ContactContainer />}
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
