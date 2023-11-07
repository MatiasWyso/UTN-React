import React from "react";

function ProductDetail(props) {
    const { name, description, price, sku, quantity } = props.product;

    return (
        <div className="product-detail">
            <h2>{name}</h2>
            <p><strong>Descripción:</strong> {description}</p>
            <p><strong>Precio:</strong> {price}</p>
            <p><strong>SKU:</strong> {sku}</p>
            <p><strong>Cantidad disponible:</strong> {quantity}</p>
        </div>
    );
}

export default ProductDetail;