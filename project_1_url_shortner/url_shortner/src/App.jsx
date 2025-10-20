// import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import History from "./components/History";
import LivePreview_And_QRModal from "./components/LivePreview_And_QRModal";
import MainCard from "./components/mainCard";


function App() {
  return (
    <>
      <Header />
      <MainCard/>
      <History/>
      <LivePreview_And_QRModal/>
      <Footer />
    </>
  );
}

export default App;
