import Home from "../components/pages/Home/HomePage";
import { HeaderOnly } from "../components/Layout";
import Following from "../components/pages/Following/FollowingPage";
import Profile from "../components/pages/Profile/Profile";
import Upload from "../components/pages/Upload/Upload";
//Public Routes

const publicRoutes = [
  { path: "/", component: Home },

  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
];
//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
