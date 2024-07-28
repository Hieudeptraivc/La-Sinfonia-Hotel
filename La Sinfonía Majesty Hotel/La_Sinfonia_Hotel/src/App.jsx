import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import About from "./pages/About";
import Rooms from "./pages/Rooms";

import Reservations from "./pages/Reservations";
import ReservationsDetail from "./pages/ReservationsDetail";
import Login from "./pages/Login";
import Room from "./pages/Room";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { AnimatePresence } from "framer-motion";

import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./authentication/ProtectedRoute";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});
const router = createBrowserRouter([
  {
    element: (
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.replace("/")}
      >
        <AppLayout />
      </ErrorBoundary>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/rooms/:id",
        element: <Room />,
      },
      {
        path: "/reservations",
        element: (
          <ProtectedRoute>
            {" "}
            <Reservations />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/reservations/:id",
        element: (
          <ProtectedRoute>
            {" "}
            <ReservationsDetail />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <RouterProvider router={router} />
        <Toaster
          position="bottom-left"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "white",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </AnimatePresence>
    </QueryClientProvider>
  );
}

export default App;
