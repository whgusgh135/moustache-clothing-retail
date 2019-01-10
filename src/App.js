import React, { Component } from 'react';
import classicTee from './styles/img/classic-tee.jpg'

import { Header } from './components/Header'
import { ProductImage } from './components/ProductImage';
import { ProductContent } from './components/ProductContent';

class App extends Component {
  constructor() {
    super();

    this.state = {cartNumber: 0, items:[], error: false};

    this.selectSize = this.selectSize.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  // add an item to cart with selected size
  addItem() {
    let size = this.state.size;
    if(size != null) {
      this.setState({cartNumber: this.state.cartNumber + 1});
      this.state.items.push(size);
    } else {
      this.setState({error: true});
    }
  }

  // set state of selected size
  selectSize(selectedSize) {
    this.setState({size: selectedSize});
    this.setState({error: false});
  }

  // loop through items array in the state to render items in cart
  renderCart() {
    if(this.state.items.length === 0) {
      return (
        <div className="cart-box">
          Cart is Empty
        </div>
      )
    }
    return this.state.items.map(item => {
      return (
        <div className="cart-box">
          <img src={classicTee} className="cart-box__image" />
          <div className="cart-box__description">
            <p>Classic Tee</p>
            <p>1x <strong>$75.00</strong></p>
            <p>Size: {item}</p>
          </div>
        </div>
      )  
    })    
  }

  // error message when trying to add to cart without selecting size
  renderError() {
    if(this.state.error) {
      return(
        <p className="product__error">You must select size!</p>
      )
    }
  }

  render() {
    let cartNumber = this.state.cartNumber;
    let size = this.state.size;

    return (
      <div className="App">
        <Header 
          cartNumber={cartNumber} 
          renderCart={this.renderCart()}
        />

        <main className="main">
          <ProductImage />

          <ProductContent 
            size={size} 
            renderError={this.renderError()} 
            addItem={this.addItem}
            selectSize={this.selectSize}
          />
        </main>
      </div>
      
    );
  }
}

export default App;