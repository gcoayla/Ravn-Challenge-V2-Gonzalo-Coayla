import React from 'react'
import AllPeople from './AllPeople'
import Description from './Description'

const Principal = () => {

    return (
        <>
            < div className="cont-all-people">  
                <div className="all-people">
                    <AllPeople key={1} last=" "/>
                </div>
            </ div>
            <Description/>
        </>
    )
}

export default Principal
