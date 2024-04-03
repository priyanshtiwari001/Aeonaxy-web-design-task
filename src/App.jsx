import Banner from "./ui/Banner";
import CardSection from "./ui/CardSection";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <main className="max-w-screen-xl bg-blue-50 bg-opacity-5 mx-auto h-full font-poppins ">
      <Navbar />
      <Banner />
      <CardSection />
    </main>
  );
}

export default App;
