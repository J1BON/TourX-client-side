// import logo from './logo.svg';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Contact from "./Components/Contact/Contact";
import Detail from "./Components/Detail/Detail";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AllOrders from "./Components/AllOrders/AllOrders";
import Myorder from "./Components/myOrder/Myorder";
import About from "./Components/Home/About/About";
import AddService from "./Components/AddService/AddService";

function App() {
  return (
    <div className="total">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/detail/:detailId">
              <Detail></Detail>
            </PrivateRoute>
            <PrivateRoute path="/add">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageorders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/myorder">
              <Myorder></Myorder>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
