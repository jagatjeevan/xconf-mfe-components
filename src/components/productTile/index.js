import React from "react";
import { label } from "../../configs/labels";
import {
  StyledProductTile,
  ProductImageContainer,
  ProductTitle,
  ProductDescription,
  ProductActionContainer,
} from "./style";

const ProductTile = (props) => {
  const { product, children } = props;

  return (
    <StyledProductTile key={product.id}>
      <ProductImageContainer>
        <img src={product.image} />
      </ProductImageContainer>
      <ProductTitle>
        <a href={`/products/${product.id}`}>{product.title}</a>
      </ProductTitle>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductActionContainer>
        <b>
          {label.currency} {product.price}
        </b>
        {children}
      </ProductActionContainer>
    </StyledProductTile>
  );
};

export default ProductTile;
