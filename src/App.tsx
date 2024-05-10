import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider value={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
