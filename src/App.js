import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router';
import WelcomePage from './components/WelcomePage/WelcomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Navigation />

      <Routes>
        <Route path='/' element={<WelcomePage />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
