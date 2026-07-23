import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Restaurants from "../pages/Restaurants/Restaurants";
import Offers from "../pages/Offers/Offers";
import RestaurantDetails from "../pages/RestaurantDetails/RestaurantDetails";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import OrderSuccess from "../pages/OrderSuccess/OrderSuccess";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import OtpVerification from "../pages/OtpVerification/OtpVerification";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/EditProfile/EditProfile";
import OrderHistory from "../pages/OrderHistory/OrderHistory";
import ManageAddresses from "../pages/ManageAddresses/ManageAddresses";
import AddAddress from "../pages/AddAddress/AddAddress";
import Favorites from "../pages/Favorites/Favorites";
import Settings from "../pages/Settings/Settings";
import Notifications from "../pages/Notifications/Notifications";
import Search from "../pages/Search/Search";
import NotFound from "../pages/NotFound/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="offers" element={<Offers />} />
            <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/verify-otp" element={<OtpVerification />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile/orders" element={<OrderHistory />} />
            <Route path="/profile/address" element={<ManageAddresses />} />
            <Route path="/profile/address/add" element={<AddAddress />} />
            <Route path="/profile/favorites" element={<Favorites />} />
            <Route path="/profile/settings" element={<Settings />} />
            <Route path="/profile/notifications" element={<Notifications />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
         </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;