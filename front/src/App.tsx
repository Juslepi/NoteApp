import { useState } from "react";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import NoteContainer from "./components/NoteContainer";

function App() {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <Header setLoginModalOpen={setLoginModalOpen} />
      <NoteContainer />
      <LoginModal
        modalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
      />
    </div>
  );
}

export default App;
