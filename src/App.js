import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';

const App = () => {
  return (
    <main className="row">
      <Sidebar />
      <Routes>
        <Route path="/Portfolio/" element={<Home />} />
        <Route path="/Portfolio/About" element={<About />} />
        <Route path="/Portfolio/Works" element={<Works />} />
        <Route path="/Portfolio/Contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
};

export default App;
