import { Button, Container, Heading, Input, VStack, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={["full", "96"]}
          m={'auto'}
          my={'16'}
        >
          <Heading textAlign={'center'}>Welcome Back</Heading>
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
          <Button variant={'link'} alignSelf={'flex-end'} my={'-5'}>
            <Link to={'/'}>Forget Password</Link>
          </Button>
          <Button variant={'solid'} colorScheme='purple' my={'5'}>Log In</Button>

          <Text textAlign={'right'}>
            New User?{" "}
            <Button variant={'link'}>
                <Link to={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
