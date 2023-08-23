import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Recipe from './pages/Recipe';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/recipe' element={<Recipe />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
