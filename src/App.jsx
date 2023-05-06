import "./styles/header/NavBar.scss";
import "./styles/Style.scss";
import NavBar from "../components/header/NavBar";
import Banner from "../components/home/Banner";
import UserDescription from "../components/home/UserDescription";
import SampleProjectsHeader from "../components/home/SampleProjectsHeader";
import SampleProjects from "../components/home/SampleProjects";
import SampleRecognitionHeader from "../components/home/SampleRecognitionHeader";
import SampleRecognition from "../components/home/SampleRecognition";
import Footer from "../components/footer/Footer";

function App() {
  return (
    <div className="siteWrapper">
      <NavBar />
      <Banner />  
      <UserDescription/>    
      <SampleProjectsHeader/>    
      <SampleProjects project="lcu-feeding" direction="right"/>    
      <SampleProjects project="ban-qu" direction="left"/>    
      <SampleProjects project="marist-pedia" direction="right"/>    
      <SampleRecognitionHeader/>    
      <SampleRecognition/>    
      <Footer/>
    </div>
  );
}

export default App;
