import React, { useState, useEffect } from "react";
import common from "ui-components";
import {
  AppHeader,
  Count,
  StyledAppLogo,
  PageContainer,
  StyledCartButton,
} from "./style";

const Header = (props) => {
  const { productsIds } = props;
  const [productsInCart, setProductsInCart] = useState(productsIds);

  useEffect(() => {
    setProductsInCart(state.productsIds);
  }, [props.cartContext.state])

  const getCount = () =>
    productsInCart.length ? <Count>{productsInCart.length}</Count> : null;

  return (
    <AppHeader>
      <PageContainer>
        <StyledAppLogo>
          <a href="/products/">{common.label.logoName}</a>
        </StyledAppLogo>
        <StyledCartButton>
          <a href="/cart/">
            {getCount()}
            {common.label.cartText}
          </a>
        </StyledCartButton>
      </PageContainer>
    </AppHeader>
  );
};

export default Header;
