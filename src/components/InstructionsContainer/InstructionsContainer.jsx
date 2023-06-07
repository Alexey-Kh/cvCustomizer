import BasicAccordion from "../common/BasicAccordion/BasicAccordion";
import BasicTextField from "../common/BasicTextField/BasicTextField";
import { useState, useEffect } from "react";
import {
  saveToLocalStorage,
  retrieveFromLocalStorage
} from "../../utils/localStorage";
import { Button } from "@mui/material";

// TODO setup target job role in UI and other crucial input for more guided experience

const externalKeyName = "instructions";

function validateContent(content) {
  if (typeof content !== "string") {
    return false;
  }

  return true;
}

function InstructionsContainer({
  handleContentChange,
  initialContent,
  containerName
}) {
  const localStorageContent = retrieveFromLocalStorage(externalKeyName);

  const [content, setContent] = useState(
    validateContent(localStorageContent) ? localStorageContent : initialContent
  );

  const handleContentInputChange = (event) => setContent(event.target.value);

  const handleReset = () => setContent(initialContent);

  useEffect(() => {
    handleContentChange(externalKeyName, content);
    saveToLocalStorage(externalKeyName, content);
  }, [content]);
  // Add restore to default button
  return (
    <BasicAccordion
      summary={containerName}
      details={
        <>
          <BasicTextField value={content} onChange={handleContentInputChange} />
          <Button variant="outlined" onClick={handleReset}>
            Reset to Default
          </Button>
        </>
      }
    />
  );
}

export default InstructionsContainer;
