import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>

          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
