import TextStyled from "./components/textStyled/index";
import Button from "./components/alertButton/index"

function App() {
  return (
    <>
      <TextStyled text="Testando o uppercase com alteração de cor" color="#F5A4E7" />
      <Button label={"Download Portfolio"}/>
    </>
  );
}

export default App;
