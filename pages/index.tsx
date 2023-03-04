import { CheckIcon, WarningIcon } from "@chakra-ui/icons";
import { Button, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function Home() {
  return (
    <TableContainer width='50%'>
        <Table variant='simple' size='sm' color='black'> 
            <Thead borderColor='blue'>
                <Tr>
                    <Th/>
                    <Th>ELR</Th>
                    <Th/>
                    <Th>CTC</Th>
                    <Th></Th>
                </Tr>
                <Tr>
                    <Th/>
                    <Th>Prod</Th>
                    <Th>Stage</Th>
                    <Th>Test</Th>
                    <Th>Dev</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>Consul</Td>
                    <Td>
                        <IconButton colorScheme='green' icon={<CheckIcon/>} size='xs' aria-label="check"/>
                    </Td>
                    <Td>
                        <Button size='xs'/>
                    </Td>
                    <Td/>
                    <Td/>
                </Tr>
                <Tr>
                    <Td>Nomad</Td>
                    <Td>
                        <IconButton colorScheme='red' icon={<WarningIcon/>} size='xs' aria-label="check"/>
                    </Td>
                    <Td/>
                    <Td/>
                    <Td/>
                </Tr>
                <Tr>
                    <Td>Vault</Td>
                    <Td/>
                    <Td/>
                    <Td/>
                    <Td/>
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
  )
}
