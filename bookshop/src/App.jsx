import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const HomePage = lazy(() => import("./Components/Pages/HomePage"));
const Inventory = lazy(() => import("./Components/Pages/InventoryPage"));
const Login = lazy(() => import("./Components/Pages/LoginPage"));
const ShoppingCart = lazy(() => import("./Components/Pages/Shopping-Cart"));
const ContactPage = lazy(() => import("./Components/Pages/ContactUsPage.jsx"));
const ProfilePage = lazy(() => import("./Components/Pages/ProfilePage.jsx"));
const ReciboPage = lazy(() => import("../src/Components/ProfileComp/Recibo_Profile.jsx" ))

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter basename='/bookshop'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalogo" element={<Inventory />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Shopping-Cart" element={<ShoppingCart />} />
          <Route path="/contacto" element={<ContactPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Recibo" element={<ReciboPage/>} />

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
