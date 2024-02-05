import './App.css';
import { Board } from '../Board/Board';
import { Flex, Container, Title } from '@mantine/core';

function App() {
  return (
    <Container>
      <Flex gap="xs" direction="column" align="center">
        <Title order={1}>SNAKE</Title>
        <Board />
      </Flex>
    </Container>
  );
}

export default App;
