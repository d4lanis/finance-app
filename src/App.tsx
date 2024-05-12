import { ThemeProvider } from "evergreen-ui";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./components/theme/index";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPassword from "./pages/auth/reset-password";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <ThemeProvider value={theme}>
      <Router>
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/forgot-password" element={<ForgotPassword />} />
          <Route path="auth/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
