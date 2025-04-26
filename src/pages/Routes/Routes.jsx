import {
    createBrowserRouter,
  } from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import LawyerDetails from "../LawyerDetails/LawyerDetails";


export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      errorElement: <div>error</div>,
      children:[
        {
          
          index: true,
          path: "/",
          Component:Home
        },
        {
          path: '/lawyerDetails/:lawyerId',
          loader: () => fetch('lawyersData.json'),
          Component: LawyerDetails
        }
        
      ]
    },
  ]);