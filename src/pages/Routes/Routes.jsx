import {
  createBrowserRouter,
} from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import LawyerDetails from "../LawyerDetails/LawyerDetails";
import MyBooking from "../MyBooking/MyBooking";
import Blogs from "../Blogs/Blogs";
import ErrorPage from "../ErrorPage/ErrorPage";
import Contact from "../Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
   errorElement: <ErrorPage></ErrorPage>,
    children: [
      {

        index: true,
        path: '/',
        Component: Home
      },
     
      {
        path: '/lawyerDetails/:lawyerId',
        loader: () => fetch('lawyersData.json'),
        Component: LawyerDetails
      },
      {
        path:'/myBooking',
        loader: () => fetch('lawyersData.json'),
        Component:MyBooking
      },
      {
        path: 'blogs',
        loader: () => fetch('blogsData.json'),
        Component: Blogs
      },
      {
        path: 'contact',
        Component: Contact
      }

    ]
  },
]);