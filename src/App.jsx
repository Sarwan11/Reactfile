import React from "react";

const App = () => {
  return (
    <div>
      <Playbutton />
      {/* <Uploadbutton /> */}
    </div>
  );
};

export default App;

function Playbutton() {
  function handlePlayButton() {
    return alert("playing the move button ");
  }
  <Button onClick={handlePlayButton}>play</Button>;
}
function Button({}) {
  return <button onClick={onClick}> playbutton </button>;
}
