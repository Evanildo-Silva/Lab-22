import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import Header from "../components/Header";
import { MenuPayment } from "../components/Cart";
import { Product } from "../components/Product";
import { useProducts } from "../contexts/contextProduct";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { products, setProducts } = useProducts();

  useEffect(() => {
    setProducts();
    setIsLoading(false);
  },);

  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        <div>
          {products?.map((product) => (
            <Product
              key={product.id}
              product={product}
            />
          ))}
        </div>
        <MenuPayment isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;