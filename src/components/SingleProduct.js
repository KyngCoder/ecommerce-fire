import { Box, Button, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SingleProduct = ({productName,productImage,productPrice,rating,deliveryTime}) => {
  return (
    <Box display="flex" flexDirection="column" flex="0.2">
    <Image src={productImage} alt={productName} />
     <Text>{productName}</Text> 
        <Text>{productPrice}</Text>
        <Text>{deliveryTime}</Text>
        <Text>{rating}</Text>
        <Button>Add to Cart</Button>
    </Box>
  )
}

export default SingleProduct