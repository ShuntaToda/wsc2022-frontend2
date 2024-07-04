import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Main } from './pages/Main';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState("")

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Main />} />
        <Route path='/signup' element={<SignUp setToken={setToken} />} />
        <Route path='/signin' element={<SignIn setToken={setToken} />} />
      </Route>
    )
  )
  useEffect(() => {
    console.log(token);
  }, [token])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
