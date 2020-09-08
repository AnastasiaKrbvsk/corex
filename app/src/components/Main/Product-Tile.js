import React from 'react';
import PropTypes from "prop-types";
import './Main.css';
import ProductList from './ProductList';

class ProductTile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAddToCart: false,
            ProductArr: ProductList
        };
    }

    render() {
        const Products = this.state.ProductArr.map((el) => 
            <tr key={el.id} className='products-item'>
                <td>{el.star}</td>
                <td>{el.reliase}</td>
                <td>{el.manufacturer}</td>
                <td>{el.model}</td>
                <td>{el.hash}th/s</td>
                <td>{el.algorithm}</td>
                <td>{el.efficiency}j/H/s</td>
                <td>&#36;{el.profit}/day</td>
                <td>{el.minPrice}&#36;-{el.maxPrixe}&#36;</td>
            </tr>
        );

        return (
            <div className='product-tile-wrapper'>
                <h2 className='product-tile-h2 h2'>On Sale</h2>
                <table className='products-list'>
                    <thead>
                        <tr className='table-head'>
                            <td></td>
                            <td>Reliase</td>
                            <td>Manufacturer</td>
                            <td>Model</td>
                            <td>Hash</td>
                            <td>Algorithm</td>
                            <td>Efficiency</td>
                            <td>Profit</td>
                            <td>Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {Products}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductTile;