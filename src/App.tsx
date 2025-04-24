import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  // jsx -> React.createElement
  const list: string[] = ["", "Elemento 1", "Elemento 2", "Elemento 3"];

  const handleSelect = (elemento: string) => {
    console.log("Elemento seleccionado", elemento);
  };

  return (
    <Card>
      <CardBody text="este es el texto" title="Tituloo"></CardBody>
      {list.length !== 0 ? (
        <List data={list} onSelect={handleSelect} />
      ) : (
        <p>No hay elementos</p>
      )}
    </Card>
  );
}

export default App;
