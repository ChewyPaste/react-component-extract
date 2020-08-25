import React, { Component } from 'react'
import Summary from './Summary'
import Total from './Total'

class Cart extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <section className="main__summary">
                    <h3>NEW GREENLEAF 2018</h3>
                    <Summary
                        selected={this.props.selected}
                        USCurrency={this.props.USCurrency}
                    />
                    <Total
                        selected={this.props.selected}
                        USCurrency={this.props.USCurrency}
                    />
                </section>
            </section>
        )
    }
}

export default Cart
