import { useRoute } from "@react-navigation/native";
import { VStack, Text} from "native-base";
import {Header} from '../components/Header';

type RoutsParams = {
    orderId: String;
}

export function Details () {
    const route = useRoute();
    const {orderId} = route.params as RoutsParams 
    return(
        <VStack flex={1} bg="gray.700">
            <Header title="Solicitação"/>
            <Text> {orderId}</Text>
        </VStack>
    )
}

// Rever a partir do minuto 1:07