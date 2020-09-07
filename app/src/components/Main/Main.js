import React from 'react';
import Filters from './Filters';
import ProductTile from './Product-Tile';
import Banner from './Banner';
import './Main.css';

function Main() {
    return (
        <main className='main'>
            <Filters/>
            <ProductTile/>
            <Banner/>
        </main>
    )
}

export default Main;