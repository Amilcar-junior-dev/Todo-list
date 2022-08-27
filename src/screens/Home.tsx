import React from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import {VStack, HStack, Heading, IconButton, useTheme, Text, FlatList, Circle, Center} from 'native-base';

import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';
import { color } from 'native-base/lib/typescript/theme/styled-system';

export function Home () {
    //OuseState abaixo será utilizado para definir o status dos chamados ( se estará aberto ou fechado), após o state é possível definir a tipagem ( o que ele poderá receber), no caso, receberá apenas opne ou closed e comecará em open.
        const [statusSelected, setestatusSelected]=useState<'open'|'closed'>('open')
        // Definindo que este usesate é do tipo OrderProps ele acessa todas as tipagens criadas no OrderProps e o DATA do componente Order para de dar erro. A tipagem deve conter um [] pois é uma lista de coisas, um array.
        const [orders, setOrders]=useState<OrderProps[]>([
        {
            id: '12',
            patrimony: '13156',
            status: 'open',
            when: '10/08/2022' 
        } 
        ])
        
        const {colors}=useTheme();
        const navigation = useNavigation()

        function handleNewOrder(){
            navigation.navigate('New')
        }
        function handleOpenDetails(orderId: string){
            navigation.navigate('Details', {orderId})// Ao colocar o parametro na função é possível coloca-la na navegação e trasmitir este parâmetro para a página que se quer ir.
        }
        function handleLogout(){
            auth() // A autenticação do firebase verifica o método de sinOut abaixo
            .signOut()// descnecta o usuário da aplicação.
            .catch(error => {
                console.log(error);
                return Alert.alert('Sair', 'Não foi possível sair')
            });
        }
        
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
                <IconButton icon={<SignOut size={26} color={colors.gray[50]}  />}onPress={handleLogout} />
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
                    renderItem={({item})=><Order data={item} onPress={()=>handleOpenDetails(item.id)} /> } // define o que se quer renderizar, pode ser uma view, um texto, um box e etc. Se deve passar o item para acessar os parametros dele, nese cado em um Text.
                    //Quando precionar o Order ele chamará a função handleOpenDetails, naverá para a outra página e levará o id do item.
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100}} // Estilo do conteudo interno da flatlist
                    ListEmptyComponent={()=>(
                        <Center>
                            <ChatTeardropText color={colors.gray[300]} size={40}/>
                            <Text color="gray.300" fontSize="xl" mt={6} textAlign="center"> Você ainda não possui {'\n'} solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
                            </Text>
                        </Center>
                    )}// Permite renderizar algum componente quando a flatList estiver vazia
                />
            </VStack>
            <Button title="Nova solicitação" onPress={handleNewOrder} />
       </VStack>
    );
}

//HStack coloca os elementos um do lado do outro
// Como no componente foi definido uma tipagem, é possível acessar essas propriedades daqui, sendo assim, definir qual será o seu tipo ( open | closed);