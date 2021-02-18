import "./App.css";
import TableContainer from "./components/Table/TableContainer";
import styled from "styled-components";

const Container = styled.div`
  margin: 50px auto 0;
`;

function App() {
  return (
    <Container>
      <TableContainer />
    </Container>
  );
}

export default App;
