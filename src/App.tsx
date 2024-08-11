import { GoogleOAuthProvider } from "@react-oauth/google";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (!token) {
      navigate('/signin');
    }
  }, []);

  return (
    <GoogleOAuthProvider clientId='287527608459-isqh1bqf2m8idf8ur7rir12mv3e2irt4.apps.googleusercontent.com'>
      <Outlet />
    </GoogleOAuthProvider>
  )
}

export default App;
