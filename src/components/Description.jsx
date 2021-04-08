import React from 'react'
import {IdContext} from '../context/IdProvider'

const Description = () => {

    const {idSelected} = React.useContext(IdContext)
    
    return (
        <div className="description">
            <h2>{idSelected}</h2>
        </div>
    )
}

export default Description
