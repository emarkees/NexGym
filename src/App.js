import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Login from './Components/Auth/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
