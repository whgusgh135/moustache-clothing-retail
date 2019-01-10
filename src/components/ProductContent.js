import React from 'react';

export class ProductContent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <section className="main__section">
            <h3 className="product__name">Classic Tee</h3>
            <p className="product__price">$75.00</p>
            <p className="product__description">Dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus dolor sit amet, consectetur adipiscing elit. Haec et tu ita posuisti, et verba vestra sunt. Quod autem ratione actum est, id officium appellamus</p>
          
            <p className="product__size">size<span className="product__required-star">*</span><strong>{this.props.size}</strong></p>
            <div className="product__size-container">
              <div className={this.props.size === "S" ? "product__size-box--active" : "product__size-box"} onClick={()=>this.props.selectSize("S")}>S</div>
              <div className={this.props.size === "M" ? "product__size-box--active" : "product__size-box"} onClick={()=>this.props.selectSize("M")}>M</div>
              <div className={this.props.size === "L" ? "product__size-box--active" : "product__size-box"} onClick={()=>this.props.selectSize("L")}>L</div>
            </div>
            {this.props.renderError}
            <div className="button--cart" onClick={() => this.props.addItem()}>Add to cart</div>
          </section>
        )
    }
}