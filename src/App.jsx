import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "./components/Loading/Loading.css";
import { AboutHistory } from "./Pages/AboutHistory/AboutHistory.jsx";
import { Home } from "./Pages/Home/Home.jsx";
import { Root } from "./root/Root.jsx";
import { Blog } from "./Pages/Blog/Blog.jsx";
import { useState, useEffect } from "react";

function LoadingScreen() {
  return (
    <div className="loader-container">
      <div className="letter-g">G</div>
      <div className="letter-k">K</div>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Root>
          <Home />
        </Root>
      ),
    },
    {
      path: "/aboutHistory",
      element: (
        <Root>
          <AboutHistory />
        </Root>
      ),
    },
    {
      path: "/blog",
      element: (
        <Root>
          <Blog />
        </Root>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
