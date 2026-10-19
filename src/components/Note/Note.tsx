import { Button, Container } from "@mui/material";
import { useState } from "react";
import { LiveModeTextArea } from "./LiveModeTextArea";
import { EditModeTextField } from "./EditModeTextField";

function Note() {
  const [isLiveMode, setIsLiveMode] = useState(false);
  const [text, setText] = useState("");

  function handleClick() {
    setIsLiveMode(prev => !prev);
  }

  return (
    <Container maxWidth="sm">
      <Button
        variant="contained"
        sx={{
          zIndex: 2
        }}
        onClick={handleClick}
      >Live Mode</Button>
      {
        isLiveMode
          ? <LiveModeTextArea text={text} />
          : <EditModeTextField text={text} handleChange={setText} />
      }
    </Container>
  );
}

export { Note };
