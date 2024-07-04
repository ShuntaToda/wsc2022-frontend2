import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Main } from './routes/Main';
import { SignUp } from './routes/SignUp';
import { SignIn, singinAction } from './routes/SignIn';
import { useEffect, useState } from 'react';
import { ErrorPage } from './routes/ErrorPage';

function App() {
  const [token, setToken] = useState("")

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
        <Route path='/' element={<Main />} />
        <Route
          path='/signup'
          element={<SignUp setToken={setToken} />}
          action={singinAction}
        />
        <Route
          path='/signin'
          element={<SignIn setToken={setToken} />}
          action={singinAction}
        />
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
