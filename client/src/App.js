import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Screens/HomeScreen";
import CartScreen from "./Screens/CartScreen";
import ProductScreen from "./Screens/ProductScreen";
import { Container } from "react-bootstrap";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ShippingScreen from "./Screens/ShippingScreen";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <main className="py-3">
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/login" component={LoginScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" component={Home} exact />
          </main>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
