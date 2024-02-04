import './App.css';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import store from './redux';
import Maps from './components/Maps/Maps';
import MapsDetails from './components/MapDetails/MapDetail';


function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/maps' element={<Maps />} />
          <Route path='/maps/:mapId' element={<MapsDetails />} />
        </Routes>

        <Footer />

      </div>
    </Provider>
  );
}

export default App;
