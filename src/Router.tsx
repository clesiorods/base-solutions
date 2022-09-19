import { Navigate, Route, Routes } from "react-router-dom";
import { Crm } from "./pages/Crm";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/resumo" element={<Home />} />
      <Route path="/" element={<Navigate to="/resumo" />} />
      <Route path="/crm" element={<Crm />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}