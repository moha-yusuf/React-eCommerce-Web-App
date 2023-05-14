import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/navBar";
import Products from './components/products';
import AboutPage from "./components/about";
import ContactPage from "./components/contact";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import ProductDetail from './components/ProductDetail';
import Logout from './components/logout';
import NotFound from "./components/notFound";
import Cart from './components/cart';
import auth from "./services/authService";
import { getCart, updateProductInCart, calculateTotalCost } from './services/cartService';
import { addProductToCart, deleteProductFromCart } from './services/cartService';
import Footer from './components/footer';
import './App.css';

class App extends Component {
  state = { 
    cart: {}
  } 

  async componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });

    const { data } = await getCart(user.id);
    this.setState({ cart: data[0] });
  }

  isItemInCart = (item) => {
    const foundItem = this.state.cart.items.find(cartItem => 
      cartItem.product_id === item.product_id && cartItem.size.id === item.size.id);
  
    return Boolean(foundItem);
  }


  handleAddToCart = async item => {
    const originalCart = { ...this.state.cart };
    let cart = { ...originalCart };
    cart.total_cost = calculateTotalCost(cart.items); 
    this.setState({ cart });

    try {
      if (!this.isItemInCart(item))
        await addProductToCart(cart, item);
      else
        await updateProductInCart(cart, item);
    } catch (ex) {
      console.error("An error occurred while adding the item to cart:", ex);
      
      this.setState({ cart: originalCart });
    }
  }

  handleDeleteInCart = async product => {
    const originalCart = { ...this.state.cart };
    let cart = { ...originalCart };
    cart.items = cart.items.filter(item => item.id !== product.id);
    cart.total_cost = calculateTotalCost(cart.items);
    console.log(cart.total_cost);
    this.setState({ cart });

    try {
      await deleteProductFromCart(cart);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        console.log("This movie has already been deleted.");
      
      this.setState({ cart: originalCart });
    }
  }

  render() { 
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />
        <main className='bg-light'>
          <Switch>
            <Route
              path="/cart"
              render={props => 
                <Cart onDelete={this.handleDeleteInCart} cart={this.state.cart} {...props} />}
            />
            <Route 
              path="/products/:productId" 
              render={props => <ProductDetail onAddCart={this.handleAddToCart} {...props}/>}
            />
            <Route path="/products" component={Products} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/register" component={RegisterForm} />
            <Route path="/home" component={Home} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;