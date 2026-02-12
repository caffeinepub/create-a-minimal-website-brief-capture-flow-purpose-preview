import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import FacilitiesPage from './pages/FacilitiesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Layout component with Header and Footer
function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

// Define routes
const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const facilitiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/facilities',
  component: FacilitiesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

// Create route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  facilitiesRoute,
  aboutRoute,
  contactRoute,
]);

// Create router
const router = createRouter({ routeTree });

export default function App() {
  return <RouterProvider router={router} />;
}
