import React from 'react'
import Card from 'react-bootstrap/Card';
import "./cardelement.css";
import card1 from "../../assets/card1.svg"
const Cardelement = () => {
    return (
        <div className='main-card'>
            <Card className='cards'>
                <div className='first-card'>
                    <text>Current Year Emission</text>
                    <img src={card1} alt="card1 image" />
                </div>
                <div className='first-card-text'>
                    <text >contribution to Scope3</text>
                </div>
                <div className='value-details'>
                    <input type="text" value={1000} disabled />
                </div>
            </Card>
            <Card className='cards'>
                <div className='first-card'>
                    <text>Revenue to emission ratio</text>
                    <img src={card1} alt="card1 image" />
                </div>
                <div className='first-card-text'>
                    <text >contribution to Scope3</text>
                </div>
                <div className='value-details'>
                    <input type="text" value={1000} disabled />
                </div>
            </Card>
            <Card className='cards'>
                <div className='first-card'>
                    <text>Category-1</text>
                    <img src={card1} alt="card1 image" />
                </div>
                <div className='first-card-text'>
                    <text >contribution to Scope3</text>
                </div>
                <div className='value-details'>
                    <input type="text" value={1000} disabled />
                </div>
            </Card>
            <Card className='lastcards'>
                <div className='last-card'>
                    <text>Total number of reached suppliers</text>
                    <h1>143</h1>
                </div>
            </Card>
        </div>

    )
}

export default Cardelement