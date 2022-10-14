import { useState } from "react";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import NoteModal from "./components/NoteModal";
import NoteContainer from "./components/NoteContainer";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header />
      <NoteContainer />
      {loggedIn ? <LoginModal /> : null}
      <NoteModal />
    </div>
  );
}

export default App;
