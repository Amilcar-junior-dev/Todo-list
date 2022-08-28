//  Este RQUIVO É PARA SEPARAR A TIPAGEM DO QUE O FIRESTORE VAI ENTREGAR;
// Data transfer Object

import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type OrderFireStoreDTO = {
    patrimony: string;
    description: string;
    status: 'open' | 'closed',
    solution?: string;
    created_at?: FirebaseFirestoreTypes.Timestamp;
    closed_at?: FirebaseFirestoreTypes.Timestamp;
}

//  Este arquivo é uma tipagem referente a tudo que se espera buscar lá do FireBase