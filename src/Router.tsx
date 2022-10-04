import { Navigate, Route, Routes } from "react-router-dom";
import { Crm } from "./pages/Crm";
import { Finance } from "./pages/Finance";
import { Home } from "./pages/Home";
import Kanban from "./pages/Kanban";
import { Login } from "./pages/Login";
// import Teste from "./components/Teste";

export function Router() {
  return (
    <Routes>
      <Route path="/resumo" element={<Home />} />
      <Route path="/" element={<Navigate to="/resumo" />} />
      <Route path="/crm" element={<Crm />} />
      <Route path="/financeiro" element={<Finance />} />
      <Route path="/kanban" element={<Kanban/>} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/teste" element={<Teste />} /> */}
    </Routes>
  );
}