import logo from "./logo.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import SignupPage from "./pages/signup/SignupPage";
import LoginPage from "./pages/login/LoginPage";
import BookTicketPage from "./pages/bookticket/BookTicketPage";
import BookTicketDetailPage from "./pages/bookticketdetail/BookTicketDetailPage";
import PaymentGuidePage from "./pages/paymentguide/PaymentGuidePage";
import CheckoutPage from "./pages/checkout/CheckoutPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/dang-ky",
          element: <SignupPage />,
        },
        {
          path: "/dang-nhap",
          element: <LoginPage />,
        },
        {
          path: "/dat-ve",
          element: <BookTicketPage />,
        },
        {
          path: "/chitiet-datve",
          element: <BookTicketDetailPage />,
        },
        {
          path: "/huongdan-thanhtoan",
          element: <PaymentGuidePage />,
        },
        {
          path: "/thanhtoan",
          element: <CheckoutPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
