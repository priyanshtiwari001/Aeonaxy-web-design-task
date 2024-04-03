import Banner from "./ui/Banner";
import CardSection from "./ui/CardSection";
import EasyBooking from "./ui/EasyBooking";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <main className="w-full bg-blue-50 bg-opacity-5 mx-auto h-full font-poppins ">
      <Navbar />
      <Banner />
      <CardSection />
      <EasyBooking />
      <Footer />
    </main>
  );
}

export default App;
