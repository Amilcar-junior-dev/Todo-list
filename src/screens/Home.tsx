import {useState} from 'react';
import React from 'react';
import { SignOut } from 'phosphor-react-native';
import {VStack, HStack, Heading, IconButton, useTheme, Text, FlatList} from 'native-base';

import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';

export function Home () {
    //OuseState abaixo será utilizado para definir o status dos chamados ( se estará aberto ou fechado), após o state é possível definir a tipagem ( o que ele poderá receber), no caso, receberá apenas opne ou closed e comecará em open.
        const [statusSelected, setestatusSelected]=useState<'open'|'closed'>('open')
        const [orders, setOrders]=useState<OrderProps[]>([{ // definindo que este usesate é do tipo OrderProps ele acessa todas as tipagens criadas no OrderProps e o DATA do componente Order para de dar erro.
            id: '123',
            patrimony: '222',
            when: '23/08/2022 às 10:00',
            status: 'open'

        }])

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

                <HStack space={3} mb={8}>
                 <Filter type='open' 
                     title='Em andamento'
                     onPress={()=>setestatusSelected('open')} // A função recebe um parâmetro ( open), portanto, deve haver a aero function () =>, caso não houve um parâmetro poderia apenas colocar o setestatusSelected.
                     isActive={statusSelected === 'open'}
                 />
                 
                 <Filter type='closed' 
                 title='finalizados'
                 onPress={()=>setestatusSelected('closed')}
                 isActive={statusSelected === 'closed'}
                 />

                </HStack>
                <FlatList 
                    data={orders} // data é os dados que se quer passar para a flatList, o que se quer renderizar de informações.
                    keyExtractor={item => item.id}//Aqui é passado uma chave única, na qual, cada informação deve possuir para que haja uma melhor performace. Deve haver um nome ( por exemplo item, mas pode ser qualquer coisa), esse item é referente as informações de DATA, ou seja, ele contém todos os parâmetros da data (neste caso: id, patrimony e etc.).
                    renderItem={({item})=><Order data={item} /> } // define o que se quer renderizar, pode ser uma view, um texto, um box e etc. Se deve passar o item para acessar os parametros dele, nese cado em um Text.
                />
            </VStack>
        </VStack>
    );
}

//HStack coloca os elementos um do lado do outro
// Como no componente foi definido uma tipagem, é possível acessar essas propriedades daqui, sendo assim, definir qual será o seu tipo ( open | closed);