import React from 'react'

const Person = ({name, specie, homeWorld}) => {
    return (
        <div className="person-cell">
            <div className="person-cell-info">
                <h2>{name}</h2>
                <p className="p-low-emphasis">{specie} from {homeWorld}</p>
            </div>
            <div className="person-cell-icon">{'>'}</div>
        </div>
    )
}

export default Person
