import React from 'react';
import './Main.css';

class Filters extends React.Component{
    render() {
        return (
            <div className='filters-container'>
                <h2 className='filters-h2 h2'>Sort By</h2>
                <ul className='filters'>
                    <li className='filters-item'>By Manufacturer</li>
                    <li className='filters-item'>Minimum price</li>
                    <li className='filters-item'>Maximum price</li>
                </ul>
            </div>
        )
    }
}

export default Filters;