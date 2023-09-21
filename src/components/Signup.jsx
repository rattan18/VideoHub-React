import { Button, Container, Heading, Input, VStack, Text, Avatar } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={["full", "96"]}
          m={'auto'}
          my={'8'}
        >
          <Heading textAlign={'center'}>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'} />
          <Input
            placeholder="Enter your name"
            type="text"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Enter your e-mail"
            type="email"
            required
            focusBorderColor="purple.500"
          />
          <Input
            placeholder="Enter your password"
            type="password"
            required
            focusBorderColor="purple.500"
          />
         
          <Button variant={'solid'} colorScheme='purple' my={'5'}>Sign Up</Button>

          <Text textAlign={'right'}>
            Already a user?{" "}
            <Button variant={'link'}>
                <Link to={'/login'}>Log In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
