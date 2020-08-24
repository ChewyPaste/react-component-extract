import React from 'react'

const Option = (props) => {
    return (
        <div className="summary__option" key={props.idx}>
            <div className="summary__option__label">{props.feature} </div>
            <div className="summary__option__value">
                {props.selectedOption.name}
            </div>
            <div className="summary__option__cost">
                {props.USCurrency.format(props.selectedOption.cost)}
            </div>
        </div>
    )
}

export default Option
