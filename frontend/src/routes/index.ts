import type { RouteObject } from "react-router-dom";
import Dashboard from "@/pages/daashboard";
import { index } from "@/pages";
import { createElement } from "react";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import AuthLayout from "@/pages/auth/layout";
import DashLayout from "@/pages/daashboard/layout";
import Appointments from "@/pages/daashboard/appointments";
import MyAppointments from "@/pages/daashboard/myappointment";

const routes: RouteObject[] = [
    {
        path: "/",
        element: createElement(index),
        
    },
    {
        path: "/auth",
        element: createElement(AuthLayout),
        children: [
            {
                path: "login",
                element: createElement(Login),
            },
            {
                path: "register",
                element: createElement(Register),
            }
        ],
    },
    {
        path: "/dashboard",
        element: createElement(DashLayout),
        children: [
            {
                path: "",
                element: createElement(Dashboard),
            },
            {
                path: "appointments",
                element: createElement(Appointments),
            },
            {
                path: "my-appointments",
                element: createElement(MyAppointments),
            }
        ]
    }
]

export default routes;
