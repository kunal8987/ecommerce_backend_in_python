import { getApiUrl } from "@/app/Utils/Api/page";
import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
const ProtectedRoutes = ({ children }) => {
  // This component can be used to protect routes
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  let tokenRefresh = async () => {
    let token = localStorage.getItem("REFRESH_TOKEN");
    try {
      if (token) {
        setLoading(true);
        let response = await getApiUrl("/auth/refresh", {
          refresh: token,
        });
        if (response.status === 200) {
          localStorage.setItem("ACCESS_TOKEN", response.data.access);
          setIsAuthenticated(true);
          setLoading(false);
        }
      } else {
        setIsAuthenticated(false);
        setLoading(true);
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      setLoading(true);
      localStorage.removeItem("ACCESS_TOKEN");
    }

    const authenticate = async () => {
      try {
        let token = localStorage.getItem("ACCESS_TOKEN");
        if (!token) {
          setIsAuthenticated(false);
          setLoading(true);
        }
        let decodedToken = jwtDecode(token);
        let currentTime = Date.now() / 1000; // Current time in seconds
        if (decodedToken.exp < currentTime) {
          // Token is expired, refresh it
          await tokenRefresh();
        } else {
          // Token is valid
          setIsAuthenticated(true);
          setLoading(false);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        setIsAuthenticated(false);
        setLoading(true);
      }
    };
  };

  if (isAuthenticated === false && loading === true) {
    <div>Loading...</div>;
  }
  return isAuthenticated ? children : <Navigate to="/AuthUser/Login" replace />;
};

export default ProtectedRoutes;
