import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { About } from "./Pages/About/About.jsx";
import { Home } from "./Pages/Home/Home.jsx";
import { Root } from "./root/Root.jsx";

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
      path: "/about",
      element: (
        <Root>
          <About />
        </Root>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
