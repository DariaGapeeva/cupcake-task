import TableContainer from "./components/Table/TableContainer";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 1212px) {
    max-width: 970px;
  }
  @media (max-width: 992.98px) {
    max-width: 750px;
  }
  @media (max-width: $768.98px) {
    max-width: none;
    padding: 0px 20px;
  }
`;

function App() {
  return (
    <Container>
      <TableContainer />
    </Container>
  );
}

export default App;
