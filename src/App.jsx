import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ZohoSection from './components/ZohoSection';
import WebServices from './components/WebServices';
import Clients from './components/Clients';
import Blog from './components/Blog';
import MediaSection from './components/MediaSection';
import FormSection from './components/FormSection';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <div className="App">
        <Header />
      </div>
      <AboutUs />
      <div className="App">
        <ZohoSection />
        <WebServices />
        <Clients />
        <Blog />
        <MediaSection />
      </div>
      <FormSection />
      <Footer />
    </div>
  );
}

export default App;
