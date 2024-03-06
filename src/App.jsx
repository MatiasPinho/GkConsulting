import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/home/Home.jsx";
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
  ]);
  return <RouterProvider router={router} />;
}

export default App;
