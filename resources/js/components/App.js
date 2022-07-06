import './App.css';
import Header from './components/layout/Header';
import Router from './components/nav/Router';
import Footer from './components/layout/Footer';
import {
    BrowserRouter,
  HashRouter,
} from "react-router-dom";
import ScrollToTop from './components/nav/ScrollToTop';

function App() {
  return (
    <div className="nescaum-container container-fluid p-0">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
