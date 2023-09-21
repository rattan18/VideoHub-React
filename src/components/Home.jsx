import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '3xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          py={'2'}
          borderBottom={'2px solid'}
          textTransform={'uppercase'}
          w={'fit-content'}
          m={'auto'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img5} h={['40', '400']} filter={'hue-rotate(-130deg)'} />

          <Text letterSpacing={'widest'} lineHeight={'170%'} textAlign={'center'} p={['4', '16']}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            officia dolore provident blanditiis neque ut, repellat minus
            architecto et totam quae nam. Cumque aut sapiente recusandae sequi,
            laboriosam soluta odio. Amet suscipit odit totam tempore ea ad
            reiciendis dolor sequi eos numquam, deserunt nulla incidunt
            voluptates iusto repudiandae commodi maxime vitae enim! Officiis
            doloremque libero sit assumenda commodi, autem explicabo! Alias non
            pariatur enim, quia autem atque corrupti necessitatibus rem saepe
            debitis tenetur officia ducimus numquam, illo facere est
            perspiciatis adipisci deserunt delectus nostrum? Dignissimos harum
            alias nobis commodi. Velit? Consequatur incidunt aperiam cum iusto
            repellat optio omnis. Magni non qui sint doloremque ex quae placeat
            delectus ad rerum neque. Modi illum expedita suscipit.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={15000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} alt="image" h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bg={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} alt="image" h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Future Is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} alt="image" h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming On Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} alt="image" h={'full'} w={'full'} objectFit={'cover'}/>
      <Heading bg={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Night Life Is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
