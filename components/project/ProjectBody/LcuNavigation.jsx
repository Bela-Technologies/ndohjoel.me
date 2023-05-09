import { Heading, Text } from "@chakra-ui/react";

function LcuNavigation() {
  const styles = {
    paddingBottom: 0,
  };
  return (
    <>
      <section className="container" id="problem">
        <div className="container-wrapper" style={styles}>
          <div className="projects">
            <div className="projects-header">
              <div className="projects-header-title" id="solution">
                <Text>
                  The LCU Navigation System was developed to address the
                  challenge of navigating around a school campus. The project
                  was initiated to help visitors to the school easily find their
                  way around without needing assistance from others. The project
                  was developed for an older friend who was struggling with
                  navigation around the school campus.
                </Text>
                <Heading as="h3">Solution</Heading>

                <Text>
                  The LCU Navigation System is a mobile-friendly and
                  desktop-friendly web application that helps users navigate
                  their way around the school campus. The project team was able
                  to get the entire school map into 2D and transcribe the
                  directions into audio to help people navigate their way
                  through the school. The project has been a great success and
                  is still in use today.
                </Text>
                <Heading as="h3" id="tech">
                  Design
                </Heading>

                <Text>
                  The design of the LCU Navigation System is user-friendly and
                  intuitive, making it easy for visitors to navigate the school
                  campus. The project team paid close attention to detail,
                  ensuring that the interface is simple and easy to use. The
                  application features an interactive map that displays the
                  layout of the school campus, with clearly marked locations and
                  directions to help users find their way around.
                </Text>

                <Heading as="h3">Tech</Heading>

                <Text>
                  The LCU Navigation System was developed using modern web
                  technologies, including HTML, CSS, and JavaScriptThe
                  application is mobile-responsive and is optimized for both
                  desktop and mobile devices. The audio transcription feature
                  was implemented using the open source text to speech model.
                </Text>

                <Heading as="h3">Achievements</Heading>

                <Text>
                  The LCU Navigation System has been a huge success and has
                  helped many visitors navigate their way around the school
                  campus. The project received positive feedback from the school
                  community, and my friend was able to improve his grade because
                  of the concept behind the project. The system is still in use
                  today and has become an essential tool for visitors to the
                  school.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LcuNavigation;
