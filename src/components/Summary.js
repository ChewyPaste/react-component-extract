//import React, { Component } from 'react'
import React from 'react'
import Option from './option'
import Total from './total'

const Summary = (props) => {
    const summary = Object.keys(props.selected).map((feature, idx) => {
        const selectedOption = props.selected[feature]
        //console.log(Summary)
        return (
            <React.Fragment key={`${feature}-${idx}`}>
                <Option
                    key={idx}
                    idx={idx}
                    feature={feature}
                    selectedOption={selectedOption}
                    USCurrency={props.USCurrency}
                />
                <Total total={props.total} key={'total'} />
            </React.Fragment>
        )
    })

    return summary
}

export default Summary
