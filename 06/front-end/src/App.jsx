import { useState, useCallback } from "react";
import styles from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { Button } from "./components/Button/Button";
import { SubPage } from "./components/SubPage/SubPage";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [isPanelShown, setIsPanelShown] = useState(true);
  const [error, setError] = useState(null);

  const handleError = useCallback((e) => {
    setError(e.message);
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, []);

  return (
    <main className={styles.main}>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button
        onClick={() => {
          setIsPanelShown((prevIsPanelShown) => !prevIsPanelShown);
        }}
      >
        {isPanelShown ? "Hide" : "Show"}
      </Button>
      {isPanelShown && <Panel onError={handleError} />}
      <SubPage isPanelShown={isPanelShown} />
    </main>
  );
}

export default App;
