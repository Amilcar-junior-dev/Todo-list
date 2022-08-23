import { HStack, Text,Box, useTheme, VStack, Circle, Pressable, IPressableProps} from "native-base";
import {ClockAfternoon, Hourglass, CircleWavyCheck} from 'phosphor-react-native';

export type OrderProps = {//Tipagem exportada para poder ser reaproveitada em outro local caso utilize este componente.
id: string;
patrimony: string;
when: string;
status: 'open' | 'closed';
}

type Props = IPressableProps & { // O tipo props contem um data que possui todas os parametros do OrderProps
 data: OrderProps;
}
//Veja que passando a tipagem para o componente é possível acessar as informações de dentro dessas propriedades
export function Order ({data, ...rest}: Props) { //Order recebe o data e todo o restante que vem de props
    const {colors}=useTheme()
    const statusColor = data.status === 'open' ? colors.amber[700] : colors.indigo[700]

    return (
    <Pressable {...rest}> 
        <HStack
          bg="gray.600"
          mb={4}
          alignItems="center"
          justifyContent="space-between"
          rounded="sm"
          overflow="hidden"
        >
            <Box h="full" w={2} bg={statusColor} /> 

            <VStack flex={1} my={5} ml={5}>
             <Text>Patrimônio:{data.patrimony}</Text>

             <HStack alignItems="center">
                <ClockAfternoon  size={15} color={colors.amber[500]}/>
                <Text color="gray.200" fontSize="xs" ml={1}>{data.when}</Text>
             </HStack>
            </VStack>
            <Circle bg="gray.500" h={12} w={12} mr={5}>
                {
                    data.status === 'closed'
                    ? <CircleWavyCheck size={24} color={colors.blue[500]} />
                    : < Hourglass size={24} color={colors.amber[500 ]} />
                }
            </Circle>
        </HStack>
    </Pressable>

    )
}