import React from "react";

const CreateForm = ({ npc, generateNPC }) => {
  const renderSubmit = (e) => {
    e.preventDefault();
    // include list of other conditions within the conditional
    if (npc.hd > 0) {
      generateNPC();
    }
  };

  return (
    <form onSubmit={renderSubmit}>
      <input type="number" name="hd" value={npc.hd} />
      <input type="submit" value="Generate" />
    </form>
  );
};

export default CreateForm;
