import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { CartState } from "../context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  console.log(products);
  return (
    <Box display="flex">
      
        <Filter />
     
      <SimpleGrid ml="20px" columns={2} spacing={10}>
      <Box
      height="80px"
      >
        {products.map((product) => (
          <SingleProduct
            key={product.id}
            productName={product.name}
            productImage={product.image}
            productPrice={product.price}
            rating={product.rating}
          />
        ))}
      </Box>
      </SimpleGrid>
    
    </Box>
  );
};

export default Home;
