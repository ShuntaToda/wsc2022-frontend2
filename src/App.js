import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Main } from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Main />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
