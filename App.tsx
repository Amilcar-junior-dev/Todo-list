import SignIn from './src/screens/SignIn';

import { NativeBaseProvider } from 'native-base'; // Utilizado para prover os contextos ue o native base fornece, portanto, deve ser envolvido em toda a aplicação.

import {THEME} from './src/styles/themes'; // Impot do objeto de temas criado.

export default function App () {
  // Native Base recebe o THEME em sua propriedade theme para que possa cessar o objeto com o tema que foi criado
  return(
    <NativeBaseProvider theme={THEME}> 
      <SignIn /> //
    </NativeBaseProvider>
  )
}