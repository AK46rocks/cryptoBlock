import React from 'react'
import { NavLink } from 'react-router-dom'


const Error404 = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound mx-auto">
                    <div className="notfound-404">
                        <h1>404</h1> 
                            <h2>We Are Sorry </h2>
                            <NavLink className="btn mt-5" to="/">Back to Homepage</NavLink>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404