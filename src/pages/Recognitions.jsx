import RecognitionHeader from "../../components/recognitions/RecognitionHeader";
import RecognitionsList from "../../components/recognitions/RecognitionsList";

function Recognitions() {
  return (
    <>
      <RecognitionHeader />
      <RecognitionsList recognition="google-dev" direction="right"/>
      <RecognitionsList recognition="nkowa-okwu" direction="left"/>
      <RecognitionsList recognition="ar-vr" direction="right"/>
      <RecognitionsList recognition="ioi-rep" direction="left"/>
    </>
  );
}

export default Recognitions;
