import { Box, TextField } from "@mui/material";
import type { Dispatch, SetStateAction } from "react";

type EditModeTextFieldProps = {
  text: string
  handleChange: Dispatch<SetStateAction<string>>
}

function EditModeTextField({ text, handleChange }: EditModeTextFieldProps) {
  return (
    <Box>
      <TextField
        fullWidth
        multiline
        defaultValue={text}
        onChange={(e) => handleChange(e.currentTarget.value)}
      >
        {text}
      </TextField>
    </Box>
  )
}

export { EditModeTextField }