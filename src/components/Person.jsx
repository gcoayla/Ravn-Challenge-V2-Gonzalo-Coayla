import React from 'react'
import indicator from '../loading.gif';

const Person = ({name, description}) => {
    return (
        <div className="person-cell">
            <div className="person-cell-info">
                <h2>{name}</h2>
                <p className="p-low-emphasis">{description}</p>
            </div>
            <div className="person-cell-icon">{'>'}</div>
        </div>
    )
}

export default Person
