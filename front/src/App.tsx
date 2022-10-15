import { useState } from "react";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import NoteContainer from "./components/NoteContainer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header />
      <NoteContainer />
      {loggedIn ? <LoginModal /> : null}
    </div>
  );
}

export default App;
