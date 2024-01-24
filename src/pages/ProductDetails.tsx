import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TproductDetails } from "../types/app";

function ProductDetails() {
  const [product, setProduct] = useState<TproductDetails>();
  const {productId} = useParams();

  const getProduct = async () => {
    const res = await fetch(`https://crud-project-paou.onrender.com/api/products/${productId}`);
    const data = await res.json();
    setProduct(data.data.product)
  }

  useEffect(() => {
    getProduct();
  }, [])

  return (
    <div>
      <div className="container">
        <h2>Product Details</h2>
        {product && (
          <div className="p-5">
            <p>Product ID: {product.id}</p>
            <h2>Product Title: {product.title}</h2>
            <h4>Product Price: {`$${product.price}`}</h4>
            <p>Product Description: {product.description}</p>
            <p>Product Category: {product.category}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails;