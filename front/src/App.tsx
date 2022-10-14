import { useState } from "react";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";

function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  return (
    <div className="App">
      <Header />
      {loggedIn ? <LoginModal /> : null}
    </div>
  );
}

export default App;
