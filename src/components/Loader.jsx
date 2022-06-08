import React from 'react'



const Loader = ({ toggle }) => {

    return (
        <div className={toggle ? 'none' : 'loader__container'}>
            <div className="loader">

            </div>
        </div>
    )
}

export default Loader