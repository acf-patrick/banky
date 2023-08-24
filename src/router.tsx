import { createBrowserRouter } from "react-router-dom";
import { LoginPage, RegistrationPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "user",
    element: <RegistrationPage />,
  },
]);

export default router;
