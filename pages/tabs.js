import React, {useEffect, useState} from 'react';
import {
    Badge,
    Box,
    Container,
    Divider,
    Grid,
    GridItem,
    Heading, Spinner, Stack,
    TabPanel,
    TabPanels,
    Tabs, Text,
    VStack
} from "@chakra-ui/react";
import CTab from "../components/Tabs/CTab";
import {ArrowRightIcon} from "@chakra-ui/icons";

const TabsPage = () => {

    const [tabsData, setTabsData] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    const [tabsList, setTabsList] = useState([]);





    const fetchTabsData = async () => {
        setIsLoading(true);
        const res = await fetch('https://course-api.com/react-tabs-project');
        const tabsData = await res.json();
        await setTabsData(tabsData);
        setTabsList(tabsData.map(tab => tab.company));
        await setIsLoading(false);
        console.log(tabsData);
    }

    useEffect(() => {
        fetchTabsData();
    }, [])

    return (
        <Box bg={'#f1f5f8'} p={[0,4, 8, 16]} pb={8} minH={'100vh'}>
            <Container maxW={'container.xl'}>
                <Box align={'center'} mb={16}>
                    <Box d={'inline-block'}>
                        <Heading fontSize={'2.5rem'} fontWeight={'bold'} mb={3}>
                            Experience
                        </Heading>
                        <Divider bg={'#2caeba'} w={'5rem'} h={'.25rem'}/>
                    </Box>
                </Box>
                {
                    isLoading ? (
                        <Box align={'center'}>
                            <Spinner color={'orange.500'} size={'xl'} thickness={'4px'}/>
                        </Box>
                    ) : (
                        <Tabs>
                            <Grid templateColumns={['1fr','1fr','1fr','200px 1fr']}>
                                <GridItem>
                                    <Stack mb={['2rem',null,null,'0']} direction={['row','row','row','column']} justify={'center'} align={'start'}>
                                        {
                                            tabsList.map(tab => (
                                                <CTab key={tab}>{tab}</CTab>
                                            ))
                                        }
                                    </Stack>
                                </GridItem>

                                <GridItem>
                                    <TabPanels>
                                        {
                                            tabsData.map(({company, title, dates, duties, id}) => (
                                                <TabPanel key={id} p={0}>
                                                    <Heading mb={3} fontWeight={'normal'} fontSize={'1.75rem'}>
                                                        {title}
                                                    </Heading>
                                                    <Badge fontWeight={'bold'} color={'#617d98'} rounded={'md'} py={1.5}
                                                           px={3} mb={3}
                                                           fontSize={'1rem'} letterSpacing={'.1rem'}
                                                           background={'#dae2ec'}>
                                                        {company}
                                                    </Badge>
                                                    <Text mb={5} letterSpacing={'.1rem'} fontSize={'1rem'}
                                                          fontWeight={'normal'}
                                                          color={'#617d98'}>
                                                        {dates}
                                                    </Text>
                                                    <VStack spacing={3} align={'left'}>
                                                        {
                                                            duties.map((duty, i) => (
                                                                <Grid alignItems={'center'} key={i}
                                                                      gridColumnGap={'2rem'}
                                                                      templateColumns={'auto 1fr'}>

                                                                    <GridItem>
                                                                        <ArrowRightIcon color={'#2caeba'} w={3} h={3}/>
                                                                    </GridItem>
                                                                    <GridItem>
                                                                        <Text color={'#324d67'}>
                                                                            {duty}
                                                                        </Text>
                                                                    </GridItem>

                                                                </Grid>
                                                            ))
                                                        }


                                                    </VStack>
                                                </TabPanel>
                                            ))
                                        }
                                    </TabPanels>
                                </GridItem>

                            </Grid>
                        </Tabs>
                    )
                }

            </Container>
        </Box>
    );
};

export default TabsPage;
