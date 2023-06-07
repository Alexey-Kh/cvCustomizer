import { Typography, Button, Box, Alert } from "@mui/material";
import BasicAccordion from "../common/BasicAccordion/BasicAccordion";
import GridWrapper from "../common/GridWrapper/GridWrapper";
import { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import BasicTextField from "../common/BasicTextField/BasicTextField";

function OutputsContainer({ data, encloseStart, encloseEnd }) {
  const [prompt, setPrompt] = useState(getPrompt());
  const [isCopied, setIsCopied] = useState(false);
  const [show, setShow] = useState(false);

  const handleCopyClick = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000); // Reset after 3 seconds
  };

  const handleShowClick = () => {
    setShow((prevShow) => !prevShow);
  };

  function getPrompt() {
    if (!data) {
      return "";
    }

    const cvContent = data.cv
      ? data.cv
          .map(
            (section) =>
              encloseStart(section.name) +
              section.content +
              encloseEnd(section.name)
          )
          .join("")
      : "";

    const cvContentEnc = encloseStart("cv") + cvContent + encloseEnd("cv");

    const jobDescriptionContentEnc =
      encloseStart("jobDescription") +
      data.jobDescription +
      encloseEnd("jobDescription");

    return (
      data.instructions +
      "\n\n" +
      cvContentEnc +
      "\n\n" +
      jobDescriptionContentEnc
    );
  }

  useEffect(() => {
    setPrompt(getPrompt());
  }, [data]);

  return (
    <GridWrapper>
      <BasicAccordion
        summary="Generated prompt"
        details={
          <>
            {/* Make dynamic alert generation */}
            {!data.jobDescription || data.jobDescription.trim() === "" ? (
              <Alert severity="warning" sx={{ mb: 1 }}>
                Job Description section is empty.
              </Alert>
            ) : (
              ""
            )}
            {!data.cv || data.cv.every((section) => !section.content.trim()) ? (
              <Alert severity="warning" sx={{ mb: 1 }}>
                My CV section is empty.
              </Alert>
            ) : (
              ""
            )}
            {!data.instructions || data.instructions.trim() === "" ? (
              <Alert severity="warning" sx={{ mb: 1 }}>
                The instructions field is empty.
              </Alert>
            ) : (
              ""
            )}
            <Typography>Prompt length: {prompt.length}</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                mt: 1
              }}
            >
              <CopyToClipboard text={prompt} onCopy={handleCopyClick}>
                <Button variant="contained">
                  {isCopied ? "Copied!" : "Copy Prompt"}
                </Button>
              </CopyToClipboard>
              <Button variant="outlined" onClick={handleShowClick}>
                {show ? "Hide Prompt" : "Show Prompt"}
              </Button>
            </Box>
            {show ? (
              <BasicTextField value={prompt} disabled sx={{ mt: 1 }} />
            ) : (
              ""
            )}
          </>
        }
      />
    </GridWrapper>
  );
}

export default OutputsContainer;
