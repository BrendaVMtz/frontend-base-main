import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
// import { ProtectedRoute } from "./components/ProtectedRoutes";
// import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import { useAuthStore } from "./store/auth";

// import { Container } from "./components/Container";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import DashboardPage from "./pages/DashboardPage";
import AboutPage from "./pages/AboutPage";
import PricingPage from "./pages/PricingPage";
import { ProtectedRoute } from "./components/ProtectedRoutes";
import NoteFormPage from "./pages/NoteFormPage";

// const queryClient = new QueryClient();

function App() {
  // const isAuth = useAuthStore((state) => state.isAuth);

  return (
    // <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navigation />
        {/* <Container> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/about" element={<AboutPage />} />


            <Route path="/profile" element={<ProfilePage />} />
            <Route element={<ProtectedRoute isAllowed={true} children={undefined} />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/notes/new" element={<NoteFormPage />} />
            </Route>
          </Routes>
        {/* </Container> */}
      </BrowserRouter>

      // <ReactQueryDevtools initialIsOpen={false} />
    // </QueryClientProvider>
  );
}

export default App;
