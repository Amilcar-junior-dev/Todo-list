import {useState} from 'react';
import {Alert} from 'react-native';
import { VStack } from "native-base";
import firestore from '@react-native-firebase/firestore'; // importado o firestore para enviar todas as informações p/ o banco D
import { useNavigation } from '@react-navigation/native';

import {Header} from '../components/Header';
import { Input } from "../components/input";
import { Button } from "../components/Button";

export function Register () {
    const [isLoading, setIsLoading] = useState(false);
    const [patrimony, setPatrimony] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation()

    function handleNewOrderRegister(){
        if(!patrimony || !description ) {
          return   Alert.alert('Registrar', 'Preencha todos os campos.')
        }
        setIsLoading(true);

        firestore()
        .collection('orders') // Se ñ há uma coleção no firebase ele cria automaticamente.
        .add({ //Esse add é para adicionar um novo documento há coleção, aqui você vai colocar o que deseja adicionar.
            patrimony,
            description,
            status: 'open',
            created_at: firestore.FieldValue.serverTimestamp() // Esta é uma função que pega a data e a hora para o created_at
        })
        .then(()=>{ // se o código acima deu tudo certo ENTÃO ( significado de then)
            Alert.alert('Solicitação', 'Solicitação registrda com sucesso.');
            navigation.goBack(); // Se deu tudo certo vai exibir o alerta acima e vai navegar para a página anterior
        })
        .catch((error)=> { // Tratamento de erro caso dê errado a solicitação acima
            console.log(error);
            setIsLoading(false); // Vai parar o carregamento
            return Alert.alert('Solicitação', 'Não foi possível registrar o pedido.')
        });

        
    }

    return (
        <VStack flex={1} p={6} bg="gray.600">
            <Header title="Nova solicitação"/>

            <Input 
            placeholder="Numero do patrimônio:"
            mt={4}
            onChangeText={setPatrimony}
            />
            <Input 
            placeholder="Descrição do problema"
            flex={1}
            mt={5}
            multiline // Permite que a pessoa possa quebrar linhas, dar entre e etc.
            textAlignVertical="top"
            onChangeText={setDescription}
            />
            <Button 
            title="cadastrar"
            mt={5}
            isLoading={isLoading}
            onPress={handleNewOrderRegister}
            />
        </VStack>
    )
}