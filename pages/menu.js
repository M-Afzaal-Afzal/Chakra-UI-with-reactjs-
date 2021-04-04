import React, {useState} from 'react';
import {Box, Button, Container, Divider, Grid, GridItem, Heading, HStack, Spacer, Text} from "@chakra-ui/react";
import Image from "next/image";

const Menu = () => {

    const menu = [
        {
            id: 1,
            title: 'buttermilk pancakes',
            category: 'breakfast',
            price: 15.99,
            img: '/menu/item-1.jpeg',
            desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
        },
        {
            id: 2,
            title: 'diner double',
            category: 'lunch',
            price: 13.99,
            img: '/menu/item-2.jpeg',
            desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
        },
        {
            id: 3,
            title: 'godzilla milkshake',
            category: 'shakes',
            price: 6.99,
            img: '/menu/item-3.jpeg',
            desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
        },
        {
            id: 4,
            title: 'country delight',
            category: 'breakfast',
            price: 20.99,
            img: '/menu/item-4.jpeg',
            desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
        },
        {
            id: 5,
            title: 'egg attack',
            category: 'lunch',
            price: 22.99,
            img: '/menu/item-5.jpeg',
            desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
        },
        {
            id: 6,
            title: 'oreo dream',
            category: 'shakes',
            price: 18.99,
            img: '/menu/item-6.jpeg',
            desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
        },
        {
            id: 7,
            title: 'bacon overflow',
            category: 'breakfast',
            price: 8.99,
            img: '/menu/item-7.jpeg',
            desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
        },
        {
            id: 8,
            title: 'american classic',
            category: 'lunch',
            price: 12.99,
            img: '/menu/item-8.jpeg',
            desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
        },
        {
            id: 9,
            title: 'quarantine buddy',
            category: 'shakes',
            price: 16.99,
            img: '/menu/item-9.jpeg',
            desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
        },
    ];

    const [menuItems, setMenuItems] = useState(menu);

    const categoriesSet = new Set(menu.map(menuItem => menuItem.category));
    const categories = ['all', ...categoriesSet];

    const setFilteredItems = (category) => {
        if (category === 'all') {
            setMenuItems(menu);
        } else {
            const filteredItems = menu.filter(item => item.category === category);
            setMenuItems(filteredItems);
        }
    }


    return (
        <Box p={[2, 4, 8, 16]} bg={'#f1f5f8'} minH={'100vh'}>
            <Container maxW={"container.xl"}>
                <Box align={'center'}>
                    <Box d={'inline-block'}>
                        <Heading mb={2} fontWeight={'bold'} fontSize={'4xl'}>
                            Our Menu
                        </Heading>
                        <Divider w={'5rem'} h={'.25rem'} bg={'orange.500'}/>
                    </Box>
                </Box>
                <HStack mt={8} mb={16} justify={'center'}>
                    {
                        categories.map((category) => (
                            <Button ket={category}
                                    onClick={() => { setFilteredItems(category)} }
                                    textTransform={'uppercase'}
                                    colorScheme={'orange'}>{category}</Button>
                        ))
                    }
                </HStack>
                <Grid justifyItems={'center'} gridTemplateColumns={['1fr', null, null, null, '1fr 1fr']}
                      gridGap={'3rem 2rem'}>

                    {
                        menuItems.map(menuItem => (
                            <GridItem key={menuItem.id} maxW={'40rem'}>
                                <Grid gridTemplateColumns={['1fr', '1fr', '250px 1fr']} gridGap={'1rem 2rem'}>
                                    <GridItem borderRadius={'.25rem'} border={'.25rem solid'} borderColor={'orange.500'}
                                              h={['200px', '200px', '175px']} pos={'relative'}>
                                        <Image src={menuItem.img} objectFit={'cover'} layout={'fill'}/>
                                    </GridItem>
                                    <GridItem>
                                        <HStack borderBottom={'.5px dotted #617d98'} alignItems={'center'}>
                                            <Heading mb={2} fontSize={'md'} fontWeight={'bold'}>{menuItem.title}</Heading>
                                            <Spacer/>
                                            <Heading mb={2} fontSize={'md'} color={'orange.500'}>${menuItem.price}</Heading>
                                        </HStack>
                                        <Text color={'#617d98'}>
                                            {menuItem.desc}
                                        </Text>
                                    </GridItem>
                                </Grid>
                            </GridItem>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Menu;
