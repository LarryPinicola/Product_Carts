import { StateContextCustom } from "../context/StateContext";
import Product from "./Product";

const Products = () => {
  const {
    state: { products },
  } = StateContextCustom();
  // console.log(products);

  return (
    <div className=" flex flex-wrap justify-center gap-10 mt-20 mb-10">
      {products?.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
};

export default Products;
