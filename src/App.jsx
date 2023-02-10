import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginRegister from "./routes/login-register";
import Students from "./routes/students";
import { apiService } from "./services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegister />,
  },

  // TODO: Protect this route (check for a jwt)
  {
    path: "/students",
    element: <Students />,
    loader() {
      return apiService.getStudents();
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
