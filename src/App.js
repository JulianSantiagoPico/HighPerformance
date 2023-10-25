import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from './Components/HomeContainer/HomeContainer';
import InsuranceContainer from './Components/InsuranceContainer/InsuranceContainer';
import AboutContainer from './Components/AboutContainer/AboutContainer';
import ServicesContainer from './Components/ServicesContainer/ServicesContainer';
import ContactContainer from './Components/ContactContainer/ContactContainer';
import ContactForm2 from './Components/ContactForm/ContactForm2';
import ContactForm3 from './Components/ContactForm/ContactForm3';

function App() {
  return (
    <div>
      <BrowserRouter>

        <NavBar />

          <Routes>

            <Route path='/' element={<HomeContainer />} />
            <Route path='/about' element={<AboutContainer />} />
            <Route path='/services' element={<ServicesContainer />} />
            <Route path='/insurance' element={<InsuranceContainer />} />
            <Route path='/contact' element={<ContactContainer />} />
            <Route path='/contact2' element={<ContactForm2 />} />
            <Route path='/contact3' element={<ContactForm3 />} />

            <Route path='/HighPerformance' element={<HomeContainer />} />
            <Route path='/HighPerformance/about' element={<AboutContainer />} />
            <Route path='/HighPerformance/services' element={<ServicesContainer />} />
            <Route path='/HighPerformance/insurance' element={<InsuranceContainer />} />
            <Route path='/HighPerformance/contact' element={<ContactContainer />} />

          </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
