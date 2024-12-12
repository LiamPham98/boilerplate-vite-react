import App from "App";
import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTER, type Router } from "routes/router";

const renderRoute = (routers: Router[]): any => {
  return routers.map(({ path, element: Element, children, index }) => {
    if (!path && children) {
      return renderRoute(children);
    }

    const wrappedElement = Element && (
      <Suspense fallback={<div>Loading...</div>}>
        <Element />
      </Suspense>
    );

    if (index) {
      return <Route key={path || "index"} index element={wrappedElement} />;
    }

    if (path) {
      return (
        <Route key={path} path={path} element={wrappedElement}>
          {children && renderRoute(children)}
        </Route>
      );
    }

    return [];
  });
};

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {renderRoute(ROUTER)}
        <Route path="*" element={<div>PAGE NOT FOUND</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
