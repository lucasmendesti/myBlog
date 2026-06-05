import { Navigate, Outlet } from 'react-router-dom';

export default function ProtectedRoute({ allowedRoles }) {
  const userRole = sessionStorage.getItem("userRole") || "guest";

  if (!allowedRoles.includes(userRole)) {
    if (userRole === "guest") {
      // Se for guest tentando acessar rota privada, manda direto para a tela de login
      // (Ajuste o path "/login" para o caminho real da sua tela de login)
      return <Navigate to="/login" replace />; 
    }
    
    // Se for um usuário comum tentando criar post, desvia ele de volta para a /home
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
}