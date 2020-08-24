import React from 'react'
import slugify from 'slugify'
import FeatureItem from './featureItem'

const Features = (props) => {
    const features = Object.keys(props.features).map((feature, idx) => {
        const featureHash = `${feature}-${idx}`
        const options = props.features[feature].map((item) => {
            const itemHash = slugify(JSON.stringify(item))

            return (
                <FeatureItem
                    key={itemHash}
                    featureName={item}
                    itemHash={itemHash}
                    item={item}
                    feature={feature}
                    handleUpdate={props.handleUpdate}
                    state={props.state}
                    USCurrency={props.USCurrency}
                />
            )
        })

        return (
            <fieldset className="feature" key={featureHash}>
                <legend className="feature__name">
                    <h3>{feature}</h3>
                </legend>
                {options}
            </fieldset>
        )
    })

    return features
}

export default Features
