import './index.css'

import {Component} from 'react'
import Header from '../Header'

class Cart extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="cart-bg-container">
          <img
            className="cart-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
            alt="cart"
          />
        </div>
      </div>
    )
  }
}

export default Cart
