import GridWrapper from "../common/GridWrapper/GridWrapper";
import CvContainer from "../CvContainer/CvContainer";
import JobDescriptionContainer from "../JobDescriptionContainer/JobDescriptionContainer";
import InstructionsContainer from "../InstructionsContainer/InstructionsContainer";

function InputsContainer({
  initialInstructions,
  handleContentChange,
  inputContainersNames
}) {
  return (
    <GridWrapper>
      <CvContainer
        handleContentChange={handleContentChange}
        containerName={inputContainersNames.cv}
      />
      <JobDescriptionContainer
        handleContentChange={handleContentChange}
        containerName={inputContainersNames.jobDescription}
      />
      <InstructionsContainer
        initialContent={initialInstructions}
        handleContentChange={handleContentChange}
        containerName={inputContainersNames.instructions}
      />
    </GridWrapper>
  );
}

export default InputsContainer;
