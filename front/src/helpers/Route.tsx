import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Things } from "../pages/Things";
import { Works } from "../pages/Works";

export const routes = [
  {
    path: "/",
    component: Home,
    key: 1,
  },
  {
    path: "/about",
    component: About,
    key: 2,
  },
  {
    path: "/contact",
    component: Contact,
    key: 3,
  },
  {
    path: "/skills",
    component: Things,
    key: 4,
  },
  {
    path: "/projects",
    component: Works,
    key: 5,
  },
];
