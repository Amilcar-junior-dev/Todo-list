import React, {useEffect} from 'react';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import {useState} from 'react';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import {VStack, HStack, Heading, IconButton, useTheme, Text, FlatList, Circle, Center} from 'native-base';
import { dateFormat } from '../utils/firestoreDateformat';

import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';


export function Home () {
   
        const [statusSelected, setestatusSelected]=useState<'open'|'closed'>('open')
      
        const [orders, setOrders]=useState<OrderProps[]>([])

        const [ loading, setLoading] = useState(true);
        
        const {colors}=useTheme();
        const navigation = useNavigation()

        function handleNewOrder(){
            navigation.navigate('New')
        }
        function handleOpenDetails(orderId: string){
            navigation.navigate('Details', {orderId})
        }
        function handleLogout(){
            auth() /
            .signOut()
            .catch(error => {
                console.log(error);
                return Alert.alert('Sair', 'Não foi possível sair')
            });
        }

        useEffect(()=> {

            setLoading(true); 
            const subscriber = firestore() 
            .collection('orders') 
            .where('status', '==', statusSelected)
            .onSnapshot( snapshot => { 
                const data = snapshot.docs.map(doc => { 
                    const { patrimony, description, status, created_at} = doc.data(); 

                    return {
                        id: doc.id,
                        patrimony,
                        description,
                        status,
                        when: dateFormat(created_at)
                    } 
                }) 
                setOrders(data);
                setLoading(false)
            });
             return subscriber 

        },[statusSelected]);
        
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
 
               {  
                    loading
                 ? 
                    <Loading /> 
                 :<FlatList 
                    data={orders} 
                    keyExtractor={item => item.id}
                    renderItem={({item})=><Order data={item} onPress={()=>handleOpenDetails(item.id)} /> } 
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100}} 
                    ListEmptyComponent={()=>(
                        <Center>
                            <ChatTeardropText color={colors.gray[300]} size={40}/>
                            <Text color="gray.300" fontSize="xl" mt={6} textAlign="center"> Você ainda não possui {'\n'} solicitações {statusSelected === 'open' ? 'em andamento' : 'finalizadas'}
                            </Text>
                        </Center>
                    )}
                />
                }
            </VStack>
            <Button title="Nova solicitação" onPress={handleNewOrder} />
       </VStack>
    );
}
