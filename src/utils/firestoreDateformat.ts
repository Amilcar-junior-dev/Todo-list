import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore'// importa a tipagem do firestore 

export function dateFormat(timestamp:FirebaseFirestoreTypes.Timestamp){
    if(timestamp){
        const date = new Date(timestamp.toDate()); // Constante recebe uma nova data passando como parametro o timestamp

        const day = date.toLocaleDateString('pt-BR'); // const recebe de date o dia
        const hour = date.toLocaleTimeString('pt-BR');// const recebe de date a hora

        return `${day} às ${hour}`; // retorna em string o dia e a hora
    }
}