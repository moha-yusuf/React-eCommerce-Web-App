import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getProduct } from "../services/productService";
import { getProductSizes } from "../services/productSizesService";
import { getSize } from "../services/sizeService";

class ProductDetail extends Form {
  state = {
    data: {
      size: "",
      quantity: 1
    },
    sizes: [],
    product: {},
    errors: {}
  };

  quantityOptions = Array.from({ length: 20 }, (_, i) => ({ id: i + 1, name: i + 1 }));

  schema = {
    quantity: Joi.number().integer().min(1).max(20).required(),
    size: Joi.number().required()
  };

  async populateProduct() {
    const { productId } = this.props.match.params;
    const { data: product } = await getProduct(productId);
    const { data: productSizes } = await getProductSizes(productId);

    const sizes = await Promise.all (
      productSizes.map(async pSize => {
        const { data: size } = await getSize(pSize.size_id)
        return { ...size };
    }));

    this.setState({ product, sizes });
  }

  async componentDidMount() {
    await this.populateProduct();
  }
  
  handleSizeChange = (event) => {
    const data = { ...this.state.data };
    data.size = event.target.value;
    this.setState({ data });
  };
  
  handleQuantityChange = (event) => {
    const data = { ...this.state.data };
    data.quantity = event.target.value;
    this.setState({ data });
  };
    
  doSubmit = async () => {
    const { data, product, sizes } = this.state;
    

    const item = {
      id: Date.now(),
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      quantity: data.quantity,
      image_url: product.image_url,
    };
    item.size = sizes.find((s) => s.id === parseInt(data.size));

    this.props.onAddCart(item);
  };

  render() {
    const { sizes, product } = this.state;

    return (
      <div className="container py-4">
        <div className="row my-4 g-4 bg-white rounded p-4">
          <div className="col-md-6">
            <img src={product.image_url} alt="/" className="img-fluid" />
          </div>
          <div className="col p-4">
            <h2>{product.name}</h2>
            <h3>{product.price}$</h3>
            <p>{product.description}</p>
            <form onSubmit={this.handleSubmit}>
              {this.renderSelect("size", "Size", sizes, "w-50")}
              {this.renderSelect("quantity", "Quantity", this.quantityOptions, "w-50")}
              {this.renderButton("Add to cart")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
