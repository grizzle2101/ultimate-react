import { useEffect, useState } from "react";

//top tip - inline props
function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("fetching products in...." + category);
    setProducts(["clothing", "househole"]);
  }, [category]);

  return <div>Product List:</div>;
}

export default ProductList;
