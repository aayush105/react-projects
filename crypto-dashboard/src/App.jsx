import Dashboard from "./pages/Dashboard/Dashboard"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Transaction from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/transaction",
      element: <Transaction />,
    },
    {
      path: "/support",
      element: <Support />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
