import React from 'react';
import { SignOut } from 'phosphor-react-native';
import {VStack, HStack, Heading, IconButton, useTheme} from 'native-base';

export function Home () {
        const {colors}=useTheme();
    return ( 
        <VStack flex={1} pb={6} bg="gray.700">
            <HStack
            w="full" 
            justifyContent="space-between"
            alignItems="center"
            bg="gray.600"
            pt={12}         
            pb={5}
            px={6}
            >
                <Heading >Icone de logo</Heading> 
                <IconButton icon={<SignOut size={26} color={colors.gray[50]} />} />
            </HStack>
        </VStack>
    );
}

//HStack coloca os elementos um do lado do outro