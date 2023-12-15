import React from 'react';
import { Container, Flex, Button,Text,ButtonGroup } from '@chakra-ui/react';



const Navbar = () => {
  return (
    <div style={{ height: '13vh', paddingTop: '0px', paddingBottom: '16px',display:'flex',justifyContent:'center',alignItems:'center' }}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" h="100%">
            
          <div style={{display:'flex'}}>
                {/* <img src="C:\Users\Dell\Downloads\R.jpeg" alt="logo" /> */}
            <Text fontSize='2xl' color="white" as="b">IEEE RAS</Text>
          </div>
          <Flex style={{marginLeft:'65px'}}>
            <ButtonGroup spacing="0">
            <Button bg='#6350a4' color='white' borderRadius='6px 0 0 6px' _hover={{ bg: '#7361AD' }}>Home</Button>
            <Button bg='#6350a4' color='white' borderRadius='0' _hover={{ bg: '#7361AD' }}>Events</Button>
            <Button bg='#6350a4' color='white' borderRadius='0' _hover={{ bg: '#7361AD' }}>Blogs</Button>
            <Button bg='#6350a4' color='white' borderRadius='0 6px 6px 0' _hover={{ bg: '#7361AD' }}>Societies</Button>
                
            </ButtonGroup>
          </Flex>
          <Flex>
            <Button bg='transparent' color='white' _hover={{ bg: '#A491EB' }}  mx={1} >Contact us</Button>
            <Button bg='white' color='#6A57A9'>Join now</Button>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Navbar;
