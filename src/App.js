import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState("")
  useEffect(() => {
    console.log(token);
  }, [token])
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Main />} />
            <Route path='/signup' element={<SignUp setToken={setToken} />} />
            <Route path='/signin' element={<SignIn setToken={setToken} />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
