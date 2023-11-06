import routes from '@/config';

// Layouts
import { HeaderOnly } from '@/layouts';

//Pages
import Home from '@/pages/Home';
import Following from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';

// Public routes
const publicRoutes = [
    { path: routes.routes.home, component: Home },
    { path: routes.routes.following, component: Following },
    { path: routes.routes.profile, component: Profile },
    { path: routes.routes.upload, component: Upload, layout: HeaderOnly },
    { path: routes.routes.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
