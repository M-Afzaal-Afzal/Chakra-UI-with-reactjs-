import React from 'react';
import { Heading } from '@chakra-ui/react'

const Home = () => {

  return (
    <>
      <Heading m={16}>Todo Application</Heading>
    </>
  );
};

export default Home;

export { getServerSideProps } from "../components/chakra/Chakra";
