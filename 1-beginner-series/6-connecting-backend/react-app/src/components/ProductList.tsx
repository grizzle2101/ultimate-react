import { useEffect, useState } from "react";

//top tip - inline props
function ProductList({ category }: { category: string }) {
  const [products, setProducts] = useState<string[]>([]);

  const connect = () => console.log("connecting...");
  const disconnect = () => console.log("disconnecting...");

  useEffect(() => {
    connect();

    return () => disconnect();
  }, [category]);

  return <div>Product List:</div>;
}

export default ProductList;
