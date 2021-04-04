import React, {useEffect, useState} from 'react'

import { Box, Button, Divider, Heading, VStack} from '@chakra-ui/react'
import TourCard from "../components/tours/TourCard";

const tours = () => {

    const [tours, setTours] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    // fetching the tours

    const fetchTours = async () => {
        setIsLoading(true);
        const response = await fetch('https://course-api.com/react-tours-project');
        const tours = await response.json();
        console.log(tours);
        await setTours(tours);
        await setIsLoading(false);
    }

    // Handling the removal of tours

    const removeTourHandler = (id) => {
        const updatedTours = tours.filter((tour) => tour.id !== id);
        setTours(updatedTours);
    }

    // calling the use effect hook

    useEffect(() => {
        fetchTours();
    }, [])


    return (
        <Box h={isLoading || (tours?.length === 0) ? '100vh' : 'auto'} bg='gray.200' w='100%' p={[4, 8, 16, 24]}>
            <Box mb={16} align={'center'} w={'100%'}>

                <VStack spacing={3} d={'inline-block'}>
                    <Heading as={'h1'} fontSize={"4xl"}>
                        {
                            (tours?.length !== 0) ?
                                'Our Tours' : 'No Tours Left'
                        }
                    </Heading>
                    <Divider h={'5px'} width={'100px'} bg={'facebook.700'} colorScheme={'facebook'}
                             orientation={'horizontal'}/>
                </VStack>
            </Box>

            <VStack spacing={12} align={'center'}>
                {
                    !isLoading ? (tours.map(tour => {
                        return (
                            <TourCard id={tour.id} removeTourHandler={removeTourHandler} photoURL={tour.image}
                                      key={tour.id} name={tour.name} info={tour.info} price={tour.price}/>
                        )
                    })) : (
                        <Heading>Loading...</Heading>
                    )
                }

                {
                    (tours?.length === 0) &&
                    <Button letterSpacing={2} _focus={{boxShadow: 'none'}} onClick={fetchTours} colorScheme={'brand'}>
                        Refresh
                    </Button>
                }
            </VStack>

        </Box>
    )
}

export default tours
