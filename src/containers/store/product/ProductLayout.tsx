/** @jsx jsx */
import {ReactNode} from "react";
import {jsx} from "@emotion/core";
import ProductSection from "../../../layouts/ProductSection";

type ProductLayoutProps = {
  type?: "create" | "manage";
  children?: ReactNode;
};

const ProductLayout = ({ type = "create", children }: ProductLayoutProps) => {
  return (
    <>
      <ProductSection type={type} />
      {children}
    </>
  );
}

export default ProductLayout;
