import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginRegister from "./routes/login-register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegister />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
