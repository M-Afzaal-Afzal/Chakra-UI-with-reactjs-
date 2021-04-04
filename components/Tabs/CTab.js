import React from 'react';
import {Tab} from "@chakra-ui/react";

const CTab = ({children}) => {
    return (
        <Tab fontSize={'1.25rem'}
             transition={"all linear .3s "}
             borderLeft={'2px solid transparent'}
             pl={['', '', '', '2rem']}
             _selected={[{
                 borderBottom: '2px solid #2caeba',
                 color: '#2caeba'
             }, null, null, {
                 borderLeft: '2px solid #2caeba',
                 borderBottom: '2px solid transparent',
                 color: '#2caeba'
             }]}>
            {children}
        </Tab>
    );
};

export default CTab;
