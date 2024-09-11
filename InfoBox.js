import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';

class InfoBox extends Component {
    render() {
        const p = this.props;
        const { current_date } = p;

        return (
            <div className='Info'>
                <h1 style={{paddingBottom: '0.2rem'}}>Satellite Jamming Simulator</h1>
                <div >
                <h2 style={{paddingBottom: '0.5rem'}}><Badge bg="success">{p.satellite_name}</Badge></h2>
                <h5 >Time: {current_date} </h5>
                </div>
            </div>
        )
    }
}

export default InfoBox;