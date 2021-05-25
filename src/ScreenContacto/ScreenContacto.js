import {Box, SimpleGrid} from '@chakra-ui/react'
import Basic from '../FormContacto/FormContact'


export default function ScreenContacto() {
    return(
        <SimpleGrid
        minChildWidth="350px" 
        spacing="40px"
        mt={10}
        >
  <Box  boxShadow="md" p="6" rounded="md" bg="white"  height="390px" >
      Texto fijo             
      What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been th
        </Box>
        <Box  boxShadow="md" p="6" rounded="md" bg="white"   height="390px" >
           <Basic/>
        </Box>
 </SimpleGrid>
    )
}
