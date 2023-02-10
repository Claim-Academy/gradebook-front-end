import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginRegister from "./routes/login-register";
import Students from "./routes/students";
<<<<<<< HEAD
import apiService from "./services/api";
||||||| parent of daf7752 (Use loader, apiService to render Student components)
=======
import { apiService } from "./services";
>>>>>>> daf7752 (Use loader, apiService to render Student components)

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRegister />,
  },

  // TODO: Protect this route (check for a jwt)
  {
    path: "/students",
    element: <Students />,
<<<<<<< HEAD
    loader() {
      return apiService.getAllStudents();
    },
||||||| parent of daf7752 (Use loader, apiService to render Student components)
=======
    loader() {
      return apiService.getStudents();
    },
>>>>>>> daf7752 (Use loader, apiService to render Student components)
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
