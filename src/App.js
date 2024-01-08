import './App.css';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import store from './redux';


function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Navigation />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<WelcomePage />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>

        <Footer />

      </div>
    </Provider>
  );
}

export default App;
