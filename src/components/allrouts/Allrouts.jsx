import React from 'react'
import NavbarComponent from '../navbar/NavbarComponent'
import "./allrouts.css"
import Cardelement from '../card/Cardelement'
import Barchart from '../lineBar/Barchart'
import Peichart from '../peichart/Peichart'
// import Tabledata from '../table/Tabledata'


const Allrouts = () => {

    return (
        <div className='allRouts'>
            <NavbarComponent />
            <Cardelement />
          <Barchart />
          <div style={{display: "flex"}}>
          <Peichart />
            {/* <Tabledata /> */}
          </div>
         
        </div>
    )
}

export default Allrouts