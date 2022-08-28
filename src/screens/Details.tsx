import React, { useEffect, useState } from "react"; 
import { useRoute } from "@react-navigation/native";
import { VStack,Text, useTheme, HStack, ScrollView,} from "native-base";
import firestore from '@react-native-firebase/firestore';
import { CircleWavyCheck, Hourglass, DesktopTower, Clipboard} from 'phosphor-react-native';

import { dateFormat } from "../utils/firestoreDateformat";

import {Header} from '../components/Header';
import { OrderProps } from "../components/Order";
import { OrderFireStoreDTO } from "../DTOs/OrderDTO";
import {Loading} from '../components/Loading';
import {CardDetails} from '../components/CardDetails';
import { Input } from "../components/input";
import {Button} from '../components/Button';

type RoutsParams = {
    orderId: string;
}

type OrderDetails  = OrderProps & {
    description: string;
    solution: string;
    closed: string;
}

export function Details () {

    const {colors}=useTheme();
    const [ isLoading, setIsLoading] = useState(true)
    const [ solution, setSolution]= useState('')
    const [ order, setOrder]= useState<OrderDetails>({} as OrderDetails) 
    //  O state acima determina que a order comecará como um objeto vazio, porém, este objeto é do tipo OrderDetails


    const route = useRoute();
    const {orderId} = route.params as RoutsParams 

    useEffect(() => {
        firestore() // Acessa o firestore
        .collection<OrderFireStoreDTO>('orders') // Acessa a coleção orders que foi criada e ainda é possível
        .doc(orderId) // Passa para o doc o id que se quer buscar
        .get()
        .then((doc) => { // Se deu certo pegar o dado acima ENTÃO cria uma const desestruturando as informações de doc
            const {patrimony, status, description, created_at, closed_at, solution} = doc.data(); // Desestrutura e pega os dados de doc.data
            const closed = closed_at ? dateFormat(closed_at) : null;

            setOrder({ // Passa para setOrder os valores retornados abaixo
                id: doc.id,
                patrimony: patrimony,
                description: description,
                status: status,
                solution: solution,
                when: dateFormat(created_at),
                closed
            });

            setIsLoading(false)
        })

    },[]);

    if(isLoading){
        return <Loading />
    }

    return(
        <VStack flex={1} bg="gray.700">
            <Header title="Solicitação"/>
            <HStack  bg="gray.500" justifyContent="center" p={4}>
                { // Verificação condicional para renderizar diferentes icones
                    order.status === 'closed'
                    ? <CircleWavyCheck size={22} color={colors.green[300]}/>
                     
                    :<Hourglass size={22} color={colors.amber[900]}/>
                }
                <Text 
                fontSize="sm"
                color={order.status === 'closed' ? colors.green[300] : colors.amber[900]}
                ml={2}
                textTransform="uppercase"
                >
                    {order.status === 'closed' ? 'finalizado' : 'em andamento'}
                </Text>
            </HStack>
            <ScrollView mx={5} showsVerticalScrollIndicator={false}>
                <CardDetails 
                  title="Equipamento"
                  description={`Patrimônio ${order.patrimony}`}
                  icon={DesktopTower}
                  footer={order.when}
                />


                <CardDetails 
                  title="Descrição do problema"
                  description={order.description}
                  icon={Clipboard}
                  footer={order.when}
                />

                <CardDetails 
                  title="Solução"
                  icon={CircleWavyCheck}
                  footer={order.closed && `Encerrado em ${order.closed}` }
                >
                    <Input 
                    placeholder="Descrição da solução:"
                    onChangeText={setSolution}
                    bg="gray.600"
                    h={24}
                    textAlignVertical="top"
                    multiline={true}
                    />

                </CardDetails>
            </ScrollView>
            {
                !order.closed &&
                <Button
                 title="Encerrar Solicitação"
                 m={5}
                />
            }
        </VStack>
    )
}
