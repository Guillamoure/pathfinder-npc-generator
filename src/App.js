import logo from "./logo.svg";
import "./App.css";
import { styles } from "./utils/creature-styles";
import { randomFromList } from "./utils/functions";
import { statSpread } from "./utils/stat-spread";

function App() {
  const generatedAbilities = () => {
    let randomStyle = randomFromList(styles);
    let assignedStats = statSpread(randomStyle);

    return (
      <>
        <span>Str: {assignedStats.str}, </span>
        <span>Dex: {assignedStats.dex}, </span>
        <span>Con: {assignedStats.con}, </span>
        <span>Int: {assignedStats.int}, </span>
        <span>Wis: {assignedStats.wis}, </span>
        <span>Cha: {assignedStats.cha}</span>
      </>
    );
  };

  return <p>{generatedAbilities()}</p>;
}

export default App;
