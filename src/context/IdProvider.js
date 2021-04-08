import React from 'react'

export const IdContext = React.createContext()

const IdProvider = (props) => {

    const [idSelected, setIdSelected] = React.useState(' ')

    return (
        <IdContext.Provider value={{idSelected, setIdSelected}}>
            {props.children}
        </IdContext.Provider>
    )
}

export default IdProvider
