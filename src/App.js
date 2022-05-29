import logo from "./logo.svg";
import "./App.css";
import { styles } from "./utils/creature-styles";
import { randomFromList } from "./utils/functions";
import { statSpread } from "./utils/stat-spread";

function App() {
  const generatedAbilities = () => {
    let randomStyle = randomFromList(styles);
    console.log(randomStyle);
    return statSpread(randomStyle).join(", ");
  };

  return <p>{generatedAbilities()}</p>;
}

export default App;
