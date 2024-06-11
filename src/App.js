import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Faq from "./pages/Faq";
import FindPw from "./pages/FindPw";
import Reservation from "./pages/Reservation";
import MeetingList from "./pages/MeetingList";
import MyPage from "./pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
      { path: "faq", element: <Faq /> },
      { path: "findPw", element: <FindPw /> },
      { path: "reservation", element: <Reservation /> },
      { path: "meeting-list", element: <MeetingList /> },
      { path: "mypage", element: <MyPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
