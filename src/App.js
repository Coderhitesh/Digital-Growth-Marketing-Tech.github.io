
import './App.css';

import Header from './components/header/Header';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import About from './components/about/About';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
       
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about-us' element={<About/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}

export default App;

