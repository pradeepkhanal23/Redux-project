import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Modal from "./components/Modal";

const App = () => {
  return (
    <main className="w-full h-full overflow-x-hidden bg-gray-50">
      <Navbar />
      <Products />
      <Footer />
      <Modal />
    </main>
  );
};
export default App;
