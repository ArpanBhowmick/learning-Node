
import Background from "./components/Background";
import Footer from "./components/Footer";
import Header from "./components/Header";
import History from "./components/History";

import MainCard from "./components/mainCard";




function App() {
  return (
    <>
    <Background>
      <Header />
      <MainCard/>
      <History/>
      
      <Footer />
      </Background>
    </>
  );
}

export default App;
