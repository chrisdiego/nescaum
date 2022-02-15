import './App.css';
import Header from './components/layout/Header';
import Router from './components/nav/Router';
import Footer from './components/layout/Footer';
import {
  HashRouter,
} from "react-router-dom";
import ScrollToTop from './components/nav/ScrollToTop';

function App() {
  return (
    <div className="nescaum-container container-fluid p-0">
      <HashRouter>
        <ScrollToTop />
        <Header />
        <Router />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
