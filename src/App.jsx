import React from "react";
import { Routes, Route } from "react-router-dom";
import DelayedLazy from "./Components/DelayedLazy/DelayedLazy.jsx";

// Each route lazy-loads the entire structure (Applayout + HomePage)
const HomeRoute = () => (
  <DelayedLazy
    import={() =>
      import("./Components/HomePage/HomePage.jsx").then((module) => ({
        default: () => {
          const HomePage = module.default;
          const Applayout = React.lazy(() =>
            import("./Components/Applayout/Applayout.jsx")
          );
          return (
            <React.Suspense fallback={<div></div>}>
              <Applayout>
                <HomePage />
              </Applayout>
            </React.Suspense>
          );
        },
      }))
    }
  />
);

const SignUp = () => (
  <DelayedLazy import={() => import("./Components/SignUp/SignUp.jsx")} />
);

const Login = () => (
  <DelayedLazy import={() => import("./Components/Login/Login.jsx")} />
);
const Dashboard = () => (
  <DelayedLazy import={() => import("./Components/Dashboard/Dashboard.jsx")} />
);
const PaymentPage = () => (
  <DelayedLazy import={() => import("./Components/AddNewListing/PaymentPage.jsx")} />
);
const AddNewListingpg = () => (
  <DelayedLazy
    import={() => import("./Components/AddNewListing/AddNewListingpg.jsx")}
  />
);
const PreviewPage = () => (
  <DelayedLazy
    import={() => import("./Components/AddNewListing/PreviewPage.jsx")}
  />
);
const SettingPage = () => (
  <DelayedLazy
    import={() => import("./Components/SettingPage/SettingPage.jsx")}
  />
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeRoute />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/add-listing" element={<AddNewListingpg />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="/settingPage" element={<SettingPage />} />
    </Routes>
  );
}

export default App;
