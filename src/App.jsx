import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLoader from "./components/shared/AppLoader";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";

const routes = [
  { path: "/", Component: lazy(() => import("./pages/Home")) },
  { path: "/careers", Component: lazy(() => import("./pages/JoinUs")) },
  { path: "/our-work", Component: lazy(() => import("./pages/OurWork")) },
  {
    path: "/our-work/:id",
    Component: lazy(() => import("./pages/ProjectInfo")),
  },
  {
    path: "/careers/:id",
    Component: lazy(() => import("./pages/JobApplication")),
  },
  { path: "/our-brand", Component: lazy(() => import("./pages/OurBrand")) },
  { path: "/our-story", Component: lazy(() => import("./pages/OurStory")) },
  { path: "/articles", element: lazy(() => import("./pages/OurStory")) },
  {
    path: "/articles/:id",
    Component: lazy(() => import("./pages/Articles")),
  },
  { path: "/contact-us", Component: lazy(() => import("./pages/ContactUs")) },
];

const App = () => {
  return (
    <main className="text-[#AAD468] min-h-screen">
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
      <Router>
        <Suspense fallback={<AppLoader message="Loading page..." />}>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
};

export default App;
