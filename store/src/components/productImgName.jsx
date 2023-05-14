import React from "react";

const ProductImgWithName = ({ name, img}) => {
    
    return (
        <div>
            <img style={{ width: 95, height:80 }} src={img} alt="" />
            <span className="p-2">{name}</span>
        </div>
    );
}

export default ProductImgWithName;