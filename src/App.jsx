import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Applayout from "./Components/Applayout/Applayout";
import DelayedLazy from "./Components/DelayedLazy/DelayedLazy";

// Lazy-loaded pages
const HomePage = lazy(() => import("./Components/HomePage/HomePage.jsx"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs.jsx"));
const AgentPage = lazy(() => import("./Components/AgentPage/AgentPage.jsx"));

const Welcome = () => (
  <DelayedLazy import={() => import("./Components/Welcome/Welcome.jsx")} />
);
const SignUp = () => (
  <DelayedLazy import={() => import("./Components/SignUp/SignUp.jsx")} />
);
const Login = () => (
  <DelayedLazy import={() => import("./Components/Login/Login.jsx")} />
);
const ChatPage = () => (
  <DelayedLazy import={() => import("./Components/ChatPage/ChatPage.jsx")} />
);
const UserLogin = () => (
  <DelayedLazy import={() => import("./Components/UserLogin/UserLogin.jsx")} />
);
const Dashboard = () => (
  <DelayedLazy import={() => import("./Components/Dashboard/Dashboard.jsx")} />
);
const PaymentPage = () => (
  <DelayedLazy import={() => import("./Components/AddNewListing/PaymentPage.jsx")} />
);
const AddNewListingpg = () => (
  <DelayedLazy import={() => import("./Components/AddNewListing/AddNewListingpg.jsx")} />
);
const PreviewPage = () => (
  <DelayedLazy import={() => import("./Components/AddNewListing/PreviewPage.jsx")} />
);
const SettingPage = () => (
  <DelayedLazy import={() => import("./Components/SettingPage/SettingPage.jsx")} />
);
const UserSignUp = () => (
  <DelayedLazy import={() => import("./Components/UserSignUp/UserSignUp.jsx")} />
);
const TestimonyForm = () => (
  <DelayedLazy import={() => import("./Components/Testimony/TestimonyForm.jsx")} />
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Pages wrapped in layout */}
        <Route path="/homePage" element={<Applayout><HomePage /></Applayout>} />
        <Route path="/about" element={<Applayout><AboutUs /></Applayout>} />
        <Route path="/agent" element={<Applayout><AgentPage /></Applayout>} />

        {/* Pages without layout */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/add-listing" element={<AddNewListingpg />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/settingPage" element={<SettingPage />} />
        <Route path="/testimony-form" element={<TestimonyForm />} />
        <Route path="/userSignUp" element={<UserSignUp />} />
      </Routes>
    </Suspense>
  );
}

export default App;
