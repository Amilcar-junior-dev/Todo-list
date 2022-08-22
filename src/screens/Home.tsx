import React from 'react';
import { SignOut } from 'phosphor-react-native';
import {VStack, HStack, Heading, IconButton, useTheme, Text} from 'native-base';

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

            <VStack flex={1} px={6}>
                <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                    <Heading color="gray.100">
                        Meus chamados
                    </Heading>
                    <Text color="amber.900"> 3 </Text>
                </HStack>
            </VStack>

        </VStack>
    );
}

//HStack coloca os elementos um do lado do outro