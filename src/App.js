import './App.css';
import Navigation from './components/Navigation/Navigation';
import { Route, Routes } from 'react-router';
import WelcomePage from './components/WelcomePage/WelcomePage';

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path='/' element={<WelcomePage />} />
      </Routes>

    </div>
  );
}

export default App;
