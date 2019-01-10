import React from 'react';

export class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <header className="header">
            <div className="cart">
                <div className="cart__heading">My Cart (<span>{this.props.cartNumber}</span>)</div>
                <div className="cart__container">
                {this.props.renderCart}
                </div>
            </div>
            </header>
        )
    }
}