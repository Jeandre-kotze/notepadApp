import ErrorPage from "./components/ErrorPage.jsx";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

// Lazy loading the App component
const App = lazy(() => import("./components/App.jsx"));

export default function RoutingPath() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/notepad' element={<App />} />
          <Route path='*' element={<ErrorPage />} /> {/* Catch-all route for errors */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
