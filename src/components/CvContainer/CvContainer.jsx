import BasicAccordion from "../common/BasicAccordion/BasicAccordion";
import CvSection from "../CvSection/CvSection";
import { useState, useEffect } from "react";
import { Button, Box } from "@mui/material";
import {
  saveToLocalStorage,
  retrieveFromLocalStorage
} from "../../utils/localStorage";

function validateSections(sections) {
  if (!Array.isArray(sections)) {
    return false;
  }

  for (const section of sections) {
    if (
      typeof section !== "object" ||
      typeof section.id !== "number" ||
      typeof section.name !== "string" ||
      typeof section.content !== "string"
    ) {
      return false;
    }
  }

  return true;
}

const externalKeyName = "cv";

function CvContainer({ handleContentChange, containerName }) {
  const defaultSections = [
    { id: 1, name: "Main Section", content: "" },
    { id: 2, name: "Secondary Section", content: "" }
  ];
  const localStorageSections = retrieveFromLocalStorage(externalKeyName);

  const [sections, setSections] = useState(
    validateSections(localStorageSections)
      ? localStorageSections
      : defaultSections
  );
  const [nextId, setNextId] = useState(sections.length + 1);
  const [disabledDelete, setDisabledDelete] = useState(
    sections.length > 1 ? false : true
  );

  const handleSectionChange = (id, name, content) => {
    setSections((prevSections) => {
      return prevSections.map((section) => {
        if (section.id === id) {
          return { ...section, name: name, content: content };
        }
        return section;
      });
    });
  };

  const addSection = () => {
    setSections((sections) => [
      ...sections,
      {
        id: nextId,
        name: "New CV Section",
        content: ""
      }
    ]);
    setNextId((nextId) => nextId + 1);
    setDisabledDelete(false);
  };

  const handleDelete = (sectionId) => {
    setSections((sections) => {
      const newSections = sections.filter(
        (section) => section.id !== sectionId
      );
      if (newSections.length < 2) setDisabledDelete(true);
      return newSections;
    });
  };

  useEffect(() => {
    handleContentChange(externalKeyName, sections);
    saveToLocalStorage(externalKeyName, sections);
  }, [sections]);

  return (
    <BasicAccordion
      summary={containerName}
      details={
        <>
          {sections.map((section) => {
            return (
              <CvSection
                key={section.id}
                section={section}
                disabledDelete={disabledDelete}
                handleDelete={handleDelete}
                handleSectionChange={handleSectionChange}
              />
            );
          })}
          <Box>
            <Button variant="contained" onClick={addSection}>
              Add section
            </Button>
          </Box>
        </>
      }
    />
  );
}

export default CvContainer;
