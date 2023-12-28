
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter , Route ,Routes } from 'react-router-dom';
import Home from './components/home/Home';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
       
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
