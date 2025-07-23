import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/home';
import About from './Pages/about';
import Academics from './Pages/academics';
import { initAOS } from "./config/aos";
import img1 from "../src/Card (2).png"
import img02 from "../src/Card (3).png"



const App = () => {
  useEffect(() => {
    initAOS();
  }, []);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'about',
          element: <About />
        },
        {
          path: 'academics',
          element: <Academics img1={img1} img02={img02} />
        },

      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App;                                                            // App.jsx