import logo from "./logo.svg";
import "./App.css";
import { styles } from "./utils/creature-styles";
import { randomFromList } from "./utils/functions";
import { statSpread } from "./utils/stat-spread";

function App() {
  const generatedAbilities = () => {
    let randomStyle = randomFromList(styles);
    let {
      assignedScores: { str, dex, con, int, wis, cha },
      choice,
    } = statSpread(randomStyle);

    return (
      <>
        <div>
          {randomStyle} - {choice}
        </div>
        <span>Str: {str}, </span>
        <span>Dex: {dex}, </span>
        <span>Con: {con}, </span>
        <span>Int: {int}, </span>
        <span>Wis: {wis}, </span>
        <span>Cha: {cha}</span>
      </>
    );
  };

  return <p>{generatedAbilities()}</p>;
}

export default App;
