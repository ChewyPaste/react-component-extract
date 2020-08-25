import React, { Component } from 'react'

class Total extends Component {
    render() {
        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
        )
        return (
            <div className="summary__total">
                <div className="summary__total__label">Total: </div>
                <div className="summary__total__value">
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(total)}
                </div>
            </div>
        )
    }
}

export default Total

// import React, { Component } from 'react'

// class Total extends Component {
//     render() {
//         return (
//             <div className="summary__total">
//                 <div className="summary__total__label">Total</div>
//                 <div classNameserve="summary__total__value">${this.props.total}</div>
//             </div>
//         )
//     }
// }

// export default Total
