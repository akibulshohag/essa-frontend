import "./App.css";
import Header from "./components/Header"
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Productlist from "./pages/Productlist";
import Card from "./pages/Card";
import Product from "./pages/Product";
import Table from "./pages/Table"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Productlist" exact component={Productlist} />
          <Route path="/Card" exact component={Card} />
          <Route path="/Product" exact component={Product} />
          <Route path="/Table" exact component={Table} />
        </Switch>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
