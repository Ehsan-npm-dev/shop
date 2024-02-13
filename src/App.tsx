import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/template/Layout";
import Dashboard from "./components/page/Dashboard";
import Order from "./components/page/Order";
import Favorite from "./components/page/Favorite";
import Wallet from "./components/page/Wallet";
import Support from "./components/page/Support";
import Setting from "./components/page/Setting"
import NotFound from "./components/page/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      

      <Route
          path="*"
          element={
            <Layout>
              <NotFound/>
            </Layout>
          }
        />
     

        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/order"
          element={
            <Layout>
              <Order />
            </Layout>
          }
        />

   

<Route
          path="/favorite"
          element={
            <Layout>
              <Favorite/>
            </Layout>
          }
        />

<Route
          path="/wallet"
          element={
            <Layout>
              <Wallet/>
            </Layout>
          }
        />

<Route
          path="/support"
          element={
            <Layout>
              <Support/>
            </Layout>
          }
        />


<Route
          path="/setting"
          element={
            <Layout>
              <Setting/>
            </Layout>
          }
        />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
