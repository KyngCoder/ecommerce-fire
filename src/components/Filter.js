import { StarIcon } from '@chakra-ui/icons'
import { Box,Text,Stack,Radio,Button, Checkbox } from '@chakra-ui/react'
import React from 'react'
import Rating from './Rating'
import { ThemeProvider, CSSReset } from "@chakra-ui/react";

const Filter = () => {
  return (
      <Box display="flex" flexDirection="column" flex="0.3">
    <Text>Filter Products</Text>

      <Stack>
  <Radio size='sm' name='1' colorScheme='red'>
    Ascending
  </Radio>
  <Radio size='md' name='1' colorScheme='green'>
    Descending
  </Radio>

  <Checkbox size='md' colorScheme='green' defaultChecked>
    Include Out of Stock
  </Checkbox>
  
  <Checkbox size='md' colorScheme='green' defaultChecked>
    Fast Delivery Only
  </Checkbox>

<Box>

      <CSSReset />
      <Rating
        size={48}
        icon="⭐"
        scale={5}
        fillColor="gold"
        strokeColor="grey"
      />
 
</Box>
  <Stack spacing={[1, 5]} direction={['column', 'row']}>



</Stack>
  
</Stack>

<Button colorScheme='blue'>Button</Button>

      </Box>  
  
  )
}

export default Filter