import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About/About.jsx";
import { Home } from "./pages/Home/Home.jsx";
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
