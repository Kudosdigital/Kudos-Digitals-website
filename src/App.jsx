import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import AppLoader from "./components/shared/AppLoader";
import NotFound from "./pages/NotFound";

const routes = [
  { path: "/", element: lazy(() => import("./pages/Home")) },
  { path: "/join_us", element: lazy(() => import("./pages/JoinUs")) },
  { path: "/our_work", element: lazy(() => import("./pages/OurWork")) },
  { path: "/our_work/:id", element: lazy(() => import("./pages/ProjectInfo")) },
  {
    path: "/join_us/:id",
    element: lazy(() => import("./pages/JobApplication")),
  },
  { path: "/our_brand", element: lazy(() => import("./pages/OurBrand")) },
  { path: "/our_story", element: lazy(() => import("./pages/OurStory")) },
  {
    path: "/articles",
    element: lazy(() => import("./components/ourstory/Articles")),
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
