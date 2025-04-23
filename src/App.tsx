import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  // jsx -> React.createElement
  const list = ["Pepe", "jorge", "pedro"];
  return (
    <Card>
      <CardBody text="este es el texto" title="Tituloo"></CardBody>
      <List data={list} />
    </Card>
  );
}

export default App;
