import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth'; // importa o auth da autenticação e a tipagem
import SignIn from '../screens/SignIn';
import {AppRoutes} from './app.routes';
import { Loading } from '../components/Loading';

export function Routes () {
    const [loading, setloading]=useState(true); //Estado que verifica se está em logado ou não.
    const [user, setUser] = useState<FirebaseAuthTypes.User>(); //Estado que verifica se há usuário

    useEffect(()=>{ //useeffect será renderizado apenas uma vez pois não possui parâmetro no []
        const subscriber = auth()
        .onAuthStateChanged(response => { // Pega uma resposta no estado de autenticação alterado (onAuthStateChanged)
            setUser(response); 
            setloading(false)

        });
        return subscriber; // É necessário este return pois o useEffect deve fazer um método de limpeza quando ele for chamado.
    },[]);

    if(loading){
        return <Loading/>
    }


    return(
        <NavigationContainer>
            { user ? <AppRoutes/> :<SignIn /> }
        </NavigationContainer>
    )
}