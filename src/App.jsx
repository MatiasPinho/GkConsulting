import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { AboutHistory } from "./Pages/AboutHistory/AboutHistory.jsx";
import { Home } from "./Pages/Home/Home.jsx";
import { Root } from "./root/Root.jsx";
import { Blog } from "./Pages/Blog/Blog.jsx";

function App() {
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
      path: "/Blog",
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
