import './index.css'

import {Component} from 'react'
import Header from '../Header'

class Products extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="cart-bg-container">
          <img
            className="products-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
            alt="products"
          />
        </div>
      </div>
    )
  }
}

export default Products
