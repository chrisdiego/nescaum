import './App.css';
import styled from 'styled-components';
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
        <MobileMargin>
            <Router />
        </MobileMargin>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

const MobileMargin = styled.div`
    @media screen and (min-width: 768px) and (max-width: 1200px) {
        margin-left: 15px;
        margin-right: 15px;
    }
`