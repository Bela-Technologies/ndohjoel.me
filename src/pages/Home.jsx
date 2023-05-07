import Banner from "../../components/home/Banner";
import UserDescription from "../../components/home/UserDescription";
import SampleProjectsHeader from "../../components/home/SampleProjectsHeader";
import SampleProjects from "../../components/home/SampleProjects";
import SampleRecognitionHeader from "../../components/home/SampleRecognitionHeader";
import SampleRecognition from "../../components/home/SampleRecognition";

function Home() {
  return (
    <>
      <Banner />
      <UserDescription />
      <SampleProjectsHeader />
      <SampleProjects project="lcu-feeding" direction="right" />
      <SampleProjects project="ban-qu" direction="left" />
      <SampleProjects project="marist-pedia" direction="right" />
      <SampleRecognitionHeader />
      <SampleRecognition />
    </>
  );
}

export default Home;
