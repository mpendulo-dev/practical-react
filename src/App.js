import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Data from './pages/Data';
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/data' element={<Data/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  );
}

export default App;
