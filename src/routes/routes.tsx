import LayoutOne from "@/components/layout/layoutOne";
import Dashboard from "@/pages/client/dashboard/page";
import AssetsAndScope from "@/pages/client/assets&scope/page";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "../App";
import Chats from "@/pages/client/chat/page";
import Payments from "@/pages/client/payments/page";
import Helpdesk from "@/pages/client/helpdesk/page";
import {MeetingsDetails, MeetingsRequest} from "@/pages/client/meetings/page";
import Profile from "@/pages/client/profile/page";
import AllProjects from "@/pages/client/allProjects/page";

export default function Routes() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [],
    },
    {
      path: "dashboard",
      element: (
        <LayoutOne>
          <Dashboard />
        </LayoutOne>
      ),
    },
    {
      path: "assets&scope",
      element: (
        <LayoutOne>
          <AssetsAndScope />
        </LayoutOne>
      ),
    },
    {
      path: "chats",
      element: (
        <LayoutOne>
          <Chats />
        </LayoutOne>
      ),
    },
    {
      path: "payments",
      element: (
        <LayoutOne>
          <Payments />
        </LayoutOne>
      ),
    },
    {
      path: "helpdesk",
      element: (
        <LayoutOne>
          <Helpdesk />
        </LayoutOne>
      ),
    },
    {
      path: "meetings",
      children : [
        { index: true, element: <Navigate to="details" replace /> },
        {
          path : 'details',
          element: (
            <LayoutOne>
              <MeetingsDetails />
            </LayoutOne>
          ),
        },
        {
          path : 'request',
          element: (
            <LayoutOne>
              <MeetingsRequest />
            </LayoutOne>
          ),
        }
      ]
    },
    {
      path: "profile",
      element: (
        <LayoutOne>
          <Profile />
        </LayoutOne>
      ),
    },
    {
      path: "add-project",
      element: (
        <LayoutOne>
          <Profile />
        </LayoutOne>
      ),
    },
    {
      path: "all-projects",
      element: (
        <LayoutOne sidebar={false}>
          <AllProjects />
        </LayoutOne>
      ),
    },
  ]);

  return <RouterProvider router={routes} />;
}
