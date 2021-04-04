import React, {useState} from 'react';
import {Badge, Box, Button, Heading, HStack, Spacer, Text} from "@chakra-ui/react";
import Image from "next/image";

const TourCard = ({name, info, price, photoURL, removeTourHandler, id}) => {

    const [isFullInfo, setIsFullInfo] = useState(false);

    const infoDisplayHandler = () => {
        setIsFullInfo(!isFullInfo);
    }

    return (
        <Box maxW={'40rem'}>
            <Box height={'20rem'} position={'relative'}>
                <Image
                    src={photoURL}
                    objectFit={'cover'} layout={'fill'}/>
            </Box>
            <Box p={8} bg={'white'}>
                <HStack mb={8}>
                    <Heading fontSize={'2xl'}>
                        {name}
                    </Heading>
                    <Spacer/>
                    <Badge px={2} py={1} bg={'#ebf7ff'} color={'#49a6e9'} fontSize={'1rem'} size={'md'}>
                        ${price}
                    </Badge>
                </HStack>

                <Box>

                    <Text color={'#617d89'}>
                        {
                            isFullInfo ? info :
                                info.substr(0, 200) + '...'
                        }
                        <Button onClick={infoDisplayHandler} _focus={{boxShadow: 'none',}} _active={{color: '#3c90b8'}}
                                _hover={{textDecoration: "none"}} ml={2} color={'#49a6e9'} variant={'link'}>
                            {
                                isFullInfo ? 'Show Less' : 'Show More'
                            }
                        </Button>
                    </Text>
                    <Box align={'center'} mt={8}>
                        <Button
                            _focus={{boxShadow: 'none'}}
                            w={230}
                            h={35}
                            fontSize={'1rem'}
                            letterSpacing={2}
                            fontWeight={'light'}
                            fontFamily={'arial'}
                            variant={'outline'}
                            color={'#bb2525'}
                            border={'1px solid'}
                            borderColor={'#bb2525'}
                            colorScheme={'brand'}
                            onClick={removeTourHandler.bind(this, id)}
                        >
                            Not Interested
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default TourCard;
