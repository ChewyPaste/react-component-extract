import React from 'react'
import FeatureItem from './FeatureItem'

const Features = (props) => {
    return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <FeatureItem
                USCurrency={props.USCurrency}
                handleUpdate={props.handleUpdate}
                state={props.state}
            />
        </form>
    )
}

export default Features
