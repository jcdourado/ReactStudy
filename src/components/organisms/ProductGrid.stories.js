import React from "react";
import ProductGrid from "./ProductGrid";
import PlaceHolderImage from "stories/assets/card-placeholder.jpg";

export default {
  title: "Components/Organisms/ProductGrid",
  component: ProductGrid,
};

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: PlaceHolderImage, title: "Título 1", summary: "Texto 1" },
      { id: 2, image: PlaceHolderImage, title: "Título 2", summary: "Texto 2" },
      { id: 3, image: PlaceHolderImage, title: "Título 3", summary: "Texto 3" },
      { id: 4, image: PlaceHolderImage, title: "Título 4", summary: "Texto 4" },
      { id: 5, image: PlaceHolderImage, title: "Título 5", summary: "Texto 5" },
      { id: 6, image: PlaceHolderImage, title: "Título 6", summary: "Texto 6" },
    ]}
  />
);
