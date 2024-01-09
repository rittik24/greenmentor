import React from 'react'
import NavbarComponent from '../navbar/NavbarComponent'
import "./allrouts.css"
import Cardelement from '../card/Cardelement'

const Allrouts = () => {
    return (
        <div className='allRouts'>
            <NavbarComponent />
            <Cardelement />
        </div>
    )
}

export default Allrouts