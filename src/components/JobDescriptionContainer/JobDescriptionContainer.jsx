import BasicAccordion from "../common/BasicAccordion/BasicAccordion";
import BasicTextField from "../common/BasicTextField/BasicTextField";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import {
  saveToLocalStorage,
  retrieveFromLocalStorage
} from "../../utils/localStorage";

const externalKeyName = "jobDescription";

function validateContent(content) {
  if (typeof content !== "string") {
    return false;
  }

  return true;
}

function JobDescriptionContainer({ handleContentChange, containerName }) {
  const localStorageSections = retrieveFromLocalStorage(externalKeyName);
  const [content, setContent] = useState(
    validateContent(localStorageSections) ? localStorageSections : ""
  );

  const handleContentInputChange = (event) => setContent(event.target.value);

  useEffect(() => {
    handleContentChange(externalKeyName, content);
    saveToLocalStorage(externalKeyName, content);
  }, [content]);

  const handleClear = () => {
    setContent("");
  };

  return (
    <BasicAccordion
      summary={containerName}
      details={
        <>
          <BasicTextField value={content} onChange={handleContentInputChange} />
          <Button variant="outlined" onClick={handleClear}>
            Clear Content
          </Button>
        </>
      }
    />
  );
}

export default JobDescriptionContainer;
