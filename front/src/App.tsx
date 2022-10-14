import { useState } from "react";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";

import NoteModal from "./components/NoteModal";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return (
    <div className="App">
      <Header />
      {loggedIn ? <LoginModal /> : null}
      <NoteModal />
    </div>
  );
}

export default App;
