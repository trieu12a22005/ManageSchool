import { Navigate, Outlet, useLocation } from "react-router-dom";
import { notifyError } from "../utils/notify";
import React from "react";

interface ProtectedProps {
    children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedProps> = ({ children }) => {
    const accessToken = localStorage.getItem("accessToken");
    const location = useLocation();

    if (!accessToken) {
        notifyError("Vui lòng đăng nhập để truy cập");
        return <Navigate to={`/login?redirect=${location.pathname}`} replace />;
    }

    return <>{children || <Outlet />}</>;
};

interface PublicProps {
    children?: React.ReactNode;
}

export const PublicRoute: React.FC<PublicProps> = ({ children }) => {
    const accessToken = localStorage.getItem("accessToken");
    return accessToken ? <Navigate to="/home" replace /> : <>{children}</>;
};

export default ProtectedRoute;
