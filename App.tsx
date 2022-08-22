import SignIn from './src/screens/SignIn';

import { NativeBaseProvider, StatusBar } from 'native-base'; // Utilizado para prover os contextos ue o native base fornece, portanto, deve ser envolvido em toda a aplicação.
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'; // Importado o useFonts e as fontes que desejo utilizar ( após feita a instalação da fonte)

import {THEME} from './src/styles/themes'; // Impot do objeto de temas criado.
import {Loading} from './src/components/Loading';

export default function App () {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold}); // criado uma constante que irá receber o useFontes passando como opções as fontees que desejarei utilizar.
  // Native Base recebe o THEME em sua propriedade theme para que possa cessar o objeto com o tema que foi criado
  return(
    <NativeBaseProvider theme={THEME}> 
    <StatusBar
      barStyle={"light-content"} // Estilo da barra como light
      backgroundColor="transparent" //Permite definir a cor da barra de status.
      translucent // Faz com que a barra de status fique translucida, aparece o que está atrás.
    />
    {fontsLoaded ? <SignIn /> :  <Loading/> }
    </NativeBaseProvider>
  )
}

//   {fontsLoaded ? <SignIn /> :  <Loading/> } determina que se as fontes foram carregadas carregue o componente de SignIn senão carregue o componente de Loading.