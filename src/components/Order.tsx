import { HStack, Text } from "native-base";

export type OrderProps = {//Tipagem exportada para poder ser reaproveitada em outro local caso utilize este componente.
id: string;
patrimony: string;
when: string;
status: 'open' | 'closed';
}

type Props =  & { // O tipo props contem um data que possui todas os parametros do OrderProps
 data: OrderProps;
}
//Veja que passando a tipagem para o componente é possível acessar as informações de dentro dessas propriedades
export function Order ({data, ...rest}: Props) { //Order recebe o data e todo o restante que vem de props
    return (
        <HStack>
            <Text>Patrimônio:{data.patrimony}</Text>
        </HStack>

    )
}