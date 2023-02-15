import './App.css';
import Header from '../componensts/Header';
import Hero from '../componensts/Hero';
import About from '../componensts/About';
import Whyus from '../componensts/Whyus';
import Faq from '../componensts/FAQ'
import Contact from '../componensts/Contact';
import Footer from '../componensts/Footer'

function App() {
  return (
    <div className="App">
      <Header  />
      <Hero />
      <main id="main">
        <About />
        <Whyus />
        <Faq />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
