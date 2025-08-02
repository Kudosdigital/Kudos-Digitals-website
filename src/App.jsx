import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLoader from "./components/shared/AppLoader";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: lazy(() => import("./pages/Home")) },
  { path: "/careers", element: lazy(() => import("./pages/JoinUs")) },
  { path: "/our-work", element: lazy(() => import("./pages/OurWork")) },
  { path: "/our-work/:id", element: lazy(() => import("./pages/ProjectInfo")) },
  {
    path: "/careers/:id",
    element: lazy(() => import("./pages/JobApplication")),
  },
  { path: "/our-brand", element: lazy(() => import("./pages/OurBrand")) },
  { path: "/our-story", element: lazy(() => import("./pages/OurStory")) },
  {
    path: "/articles",
    element: lazy(() => import("./components/ourstory/Articles")),
  },
  {
    path: "/contact-us",
    element: lazy(() => import("./pages/ContactUs")),
  },
];

const App = () => {
  return (
    <main className="bg-[#001515] text-[#AAD468] min-h-screen">
      <Router>
        <Suspense fallback={<AppLoader message="Loading page..." />}>
          <Routes>
            {routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
    </main>
  );
};

export default App;
