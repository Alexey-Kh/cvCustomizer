import "./App.css";
import { Grid } from "@mui/material";
import InputsContainer from "./components/InputsContainer/InputsContainer";
import OutputsContainer from "./components/OutputsContainer/OutputsContainer";
import { useState } from "react";

function encloseStart(text) {
  return `{{ ${text} }}\n`;
}
function encloseEnd(text) {
  return `\n{{/ ${text} }}`;
}

//TODO make keys of containers dynamic and passed across containers
function App() {
  const [data, setData] = useState({
    _settings: {
      inputContainersNames: {
        cv: "My CV",
        jobDescription: "Job Description",
        instructions: "ChatGPT instructions"
      }
    }
  });

  const handleContentChange = (id, content) => {
    setData((prevContent) => ({ ...prevContent, [id]: content }));
  };

  const initialInstructions = `I’m looking for a job as an IT Product Manager, but I haven’t directly been on such role in my past or manager a software product directly. But I have touched those areas in my experience and have relevant skills, and through my CV I’m trying to show it.
I have a standard CV that I wish to customise for every potential employer (aka ‘${
    data._settings.inputContainersNames.jobDescription
  }’). My goal is to make a CV that will raise enough interest in potential employer to ask me for an interview.

I’ll give you the following input: 
- ‘${
    data._settings.inputContainersNames.cv
  }’ in text format that consists of 2 parts: 
  1) ‘Main Section' that is the most important, as I want it to show the most critical info and be a selling point on it’s own, because most probably recruiters won’t be looking further; 
  2) ‘Secondary Section’ describing in details my full career experience that a lot of people might potentially skip (but it still will be a part of CV, so CV screening software will grasp it).
- ‘${data._settings.inputContainersNames.jobDescription}’.
- The input sections will be enclosed in tags: ${encloseStart(
    "Section Name"
  ).replace(/\n/g, "")} for section start and ${encloseEnd(
    "Section Name"
  ).replace(/\n/g, "")} for end.
  - The provided input is in Markdown, but there could be format conversion errors, so pay attention to the context.

  I need you to analyze the '${
    data._settings.inputContainersNames.jobDescription
  }' and '${
    data._settings.inputContainersNames.cv
  }' and based on all the input provided:
- provide recommendations how I should modify the Main Section of ${
    data._settings.inputContainersNames.jobDescription
  } to better match the ${
    data._settings.inputContainersNames.cv
  }. Give a specific list of what sentences should be rephrased or what should be added and where.
- specify most important keywords that were in ${
    data._settings.inputContainersNames.jobDescription
  }, but are absent in ${
    data._settings.inputContainersNames.jobDescription
  } (or are mentioned not enough). Suggest where to add them.
- provide any other important recommendation
- write a cover letter`;

  return (
    <Grid container>
      <InputsContainer
        handleContentChange={handleContentChange}
        initialInstructions={initialInstructions}
        inputContainersNames={data._settings.inputContainersNames}
      />
      <OutputsContainer
        encloseStart={encloseStart}
        encloseEnd={encloseEnd}
        data={data}
      />
    </Grid>
  );
}

export default App;
