import { useState} from 'react';
import {VStack, Heading, Icon, useTheme} from 'native-base'; // Icon é um elemento para se utilizar os icones que se deseja.

// import { Envelope} from 'phosphor-react-native';
import { Envelope, Key} from 'phosphor-react-native';
import { Input } from '../components/input';
import {Button} from '../components/Button';


function SignIn (){ //Todo componente deve começar com letra maiúscula
    
    const [name, setName]=useState(''); // Começa como vazio
    const [password, setPassword]=useState('');//Começa como vazio.

    const {colors}= useTheme(); // Desestruturando e pegando o colors de dentro do useTheme
    return (
        <VStack flex={1} alignItems="center" bg="gray.700" px={8} pt={24}>
            <Heading color="gray.100" fontSize="xl" mt={20} >
                Acesse sua conta  
            </Heading>
            <Input placeholder="email"
             mb={4}
             InputLeftElement={<Icon ml={4} as={<Envelope color={colors.gray[300]}/>} />}
             onChangeText={setName}//Quando o valor do input mudar irá passar para o setName, que por sua vez, passa o valor para o name.
             /> 
            <Input placeholder="senha"
             InputLeftElement={<Icon ml={4} as={<Key color={colors.gray[300]}/>} />}
             secureTextEntry // Esconde as letras
             mb={8}
             onChangeText={setPassword}
            /> 
            <Button title="Entrar" w="full"/* Full fazs a largura ocupar toda a tela*//> 
        </VStack>
    )
}
export default SignIn

// Cada input acima pode receber propriedades individuais, e devido ao (...rest do componente) será transmitido essas propriedades ao componente.

// InputLeftElement recebe uma chaves pois queremos que nele seja renderizado um elemento, portanto, é passado para ele o <Icon /> com o AS={}, na qual, iremos inserir a biblioteca de icones que desejamos, sendo assim, será remontado ao <Icons /> que ele é um ícone daquele tipo de biblioteca, no caso, do tipo envelop.
// color={colors.gray[300]} acessa a propriedade colors desetruturada do usetheme e pega a cor que se deseja para o icone