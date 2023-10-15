import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>

        <NavBar />

          <Routes>

            <Route path='/'/>

          </Routes>

        <Footer />

      </BrowserRouter>
    </div>
  );
}

export default App;
