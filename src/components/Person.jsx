import React from 'react'
import {IdContext} from '../context/IdProvider'

const Person = ({name, specie, homeWorld, idPerson}) => {

    const {setIdSelected} = React.useContext(IdContext)
    
    return (
        <div className="person-cell" onClick={e => setIdSelected(idPerson)}>
            <div className="person-cell-info">
                <h2>{name}</h2>
                <p className="p-low-emphasis">{specie} from {homeWorld}</p>
            </div>
            <div className="person-cell-icon">{'>'}</div>
        </div>
    )
}

export default Person
