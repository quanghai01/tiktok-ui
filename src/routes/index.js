import Home from "../components/pages/Home/HomePage";
import Following from "../components/pages/Following/FollowingPage";
import Profile from "../components/pages/Profile/Profile";
//Public Routes

const publicRoutes = [
  { path: "/", component: Home },

  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
];
//Private Routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
