import React from 'react'
import slugify from 'slugify'
import FeatureOptions from './FeatureOptions'
import FEATURES from '../FEATURES/FEATURES'

const FeatureItem = (props) => {
    return Object.keys(FEATURES).map((feature, idx) => {
        const featureHash = `${feature}-${idx}`
        const options = FEATURES[feature].map((item) => {
            const itemHash = slugify(JSON.stringify(item))

            return (
                <FeatureOptions
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
}

export default FeatureItem
