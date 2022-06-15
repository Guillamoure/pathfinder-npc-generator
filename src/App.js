import "./App.css";
import React from "react";
import { styles } from "./utils/creature-styles";
import { randomFromList, pluser } from "./utils/functions";
import { statSpread } from "./utils/stat-spread";
import { classChoice } from "./utils/class-choice";
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

    dupeNPC.klass = classChoice(randomStyle);

    dupeNPC.generated = true;

    setnpc(dupeNPC);
  };

  const renderNPC = () => {
    if (npc.generated) {
      console.log(npc);
      const { style, choice, str, dex, con, int, wis, cha, klass, hd } = npc;
      let bab = 1;
      if (klass.hd === 8) {
        bab = 0.75;
      }
      if (klass.hd === 6) {
        bab = 0.5;
      }
      bab = Math.floor(bab * hd);
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
          <div>
            <strong>BAB</strong>: {pluser(bab)}
          </div>
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
