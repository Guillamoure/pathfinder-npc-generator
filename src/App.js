import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { styles } from "./utils/creature-styles";
import { randomFromList } from "./utils/functions";
import { statSpread } from "./utils/stat-spread";
import CreateForm from "./components/create-form";

function App() {
  const [npc, setnpc] = React.useState({ hd: 1, generated: false });

  const generateNPC = () => {
    let randomStyle = randomFromList(styles);
    let {
      assignedScores: { str, dex, con, int, wis, cha },
      choice,
    } = statSpread(randomStyle);

    let dupeNPC = { ...npc };
    dupeNPC.str = str;
    dupeNPC.dex = dex;
    dupeNPC.con = con;
    dupeNPC.int = int;
    dupeNPC.wis = wis;
    dupeNPC.cha = cha;
    dupeNPC.style = randomStyle;
    dupeNPC.choice = choice;

    dupeNPC.generated = true;

    setnpc(dupeNPC);
  };

  const renderNPC = () => {
    if (npc.generated) {
      const { style, choice, str, dex, con, int, wis, cha } = npc;
      return (
        <>
          <div>
            {style} - {choice}
          </div>
          <span>Str: {str}, </span>
          <span>Dex: {dex}, </span>
          <span>Con: {con}, </span>
          <span>Int: {int}, </span>
          <span>Wis: {wis}, </span>
          <span>Cha: {cha}</span>
        </>
      );
    } else {
      return "butts";
    }
  };

  return (
    <main>
      {renderNPC()}
      <CreateForm npc={npc} generateNPC={generateNPC} />
    </main>
  );
}

export default App;
