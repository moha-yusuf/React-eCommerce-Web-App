import React, { Component } from 'react';
import Table from './common/table'
import ProductImgWithName from './productImgName';
import Quantity from './quantity';

class CartTable extends Component {
    state = {
        sortColumn: { path: "Product", order: "asc" }
    }

    columns = [
        { 
            path: "product_name", 
            label: "Product",
            content: item => (
                <ProductImgWithName name={item.product_name} img={item.image_url}/>
            )
        },
        { path: "size.name", label: "Size"},
        { 
            path: "quantity",
            label: "Quantity",
            content: item => (
                <Quantity value={item.quantity}/>
            )
        },
        { path: "price", label: "Total"},
        {
            key: "delete",
            content: product => (
                <button
                className="btn btn-danger btn-sm"
                onClick={() => this.props.onDelete(product)}
                >
                    X
                </button>
            )
        }
    ];

    render() {
        const updatedCart = { ...this.props.cart };
        updatedCart.items = updatedCart.items.map(item => ({
            ...item,
            price: (item.quantity * item.price).toFixed(2)
        }));

        return (
            <Table 
                columns={this.columns}
                data={updatedCart.items}
            />
        );
    }
}

export default CartTable;