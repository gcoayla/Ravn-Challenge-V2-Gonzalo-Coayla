import React from 'react'
import load from '../static/loading.gif'

const Loading = () => {
    return (
        <div className="message">
            <div className="loading-img">
                <img src={load} alt="loading..."/>
            </div>
            <h2 className="h2-low-emphasis">Loading</h2>
        </div>
    )
}

export default Loading
