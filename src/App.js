import {
  BrowserRouter, Routes, Route
} from "react-router-dom";
import Spiner from "./component/Main/Spiner";
import TopNav from "./component/Main/TopNav";
import NavBar from "./component/Main/NavBar";
import Main from "./component/Main";
import About from "./component/Main/About";
import Services from "./component/Main/Services";
import PackageList from "./component/Main/PackageList";
import Destination from "./component/Main/Destination";
import TestimonialSection from "./component/Main/TestimonialSection";
import ContactSection from "./component/Main/ContactSection";
import NotFoundPage from "./component/Main/NotFound";
import BookingForm from "./component/Main/BookingForm";
import Team from "./component/Main/Team";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/spiner" element={<Spiner />} />
        <Route path="/home" element={<TopNav />} />
        <Route path="/home" element={<NavBar />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/packageList" element={<PackageList />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/testimonialSection" element={<TestimonialSection />} />
        <Route path="/contactSection" element={<ContactSection />} />
        <Route path="/notFoundPage" element={<NotFoundPage />} />
        <Route path="/bookingForm" element={<BookingForm />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
