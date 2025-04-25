import {
    createBrowserRouter,
  } from "react-router";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Doctors from "../Doctors/Lawyers";
import { Suspense } from "react";


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
        
      ]
    },
  ]);