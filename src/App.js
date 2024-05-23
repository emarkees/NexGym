import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
