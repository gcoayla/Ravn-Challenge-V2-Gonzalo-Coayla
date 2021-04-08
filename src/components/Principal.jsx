import React from 'react'
import AllPeople from './AllPeople'
import Description from './Description'

const Principal = () => {

    return (
        <>
            < div className="cont-all-people">  
                <div className="all-people">
                    <AllPeople key={5} number={5}/>
                </div>
            </ div>
            <Description/>
        </>
    )
}

export default Principal
