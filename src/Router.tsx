import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutApp from "./pages/LayoutApp";
import Home from "./pages/Home";
import About from "./pages/About";
import Sample from "./pages/Sample";
import LayoutPanel from "./pages/LayoutPanel";
import Dashboard from "./pages/Dashboard";
import Companies from "./pages/Companies";
import Customers from "./pages/Customers";
import Invoices from "./pages/Invoices";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Tickets from "./pages/Tickets";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutApp />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "sample", element: <Sample /> },
    ],
  },
  {
    path: "panel",
    element: <LayoutPanel />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "companies", element: <Companies /> },
      { path: "customers", element: <Customers /> },
      { path: "invoices", element: <Invoices /> },
      { path: "products", element: <Products /> },
      { path: "profile", element: <Profile /> },
      { path: "tickets", element: <Tickets /> },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  { path: "*", element: <PageNotFound /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
