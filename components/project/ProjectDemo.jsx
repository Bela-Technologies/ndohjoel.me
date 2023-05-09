import { Box, Card, CardBody, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import Projects from "../../src/data/project.json";
import "../../src/styles/Project/ProjectBody.scss";

// eslint-disable-next-line react/prop-types
function ProjectDemo({ projectName }) {
  const styles = {
    paddingTop: 0,
  };
  return (
    <>
      <section className="container">
        <div className="container-wrapper" style={styles}>
          <div className="projects">
            <div className="projects-header">
              <div className="projects-header-title">
                {Projects[projectName].demo.image && (
                  <>
                    <Heading as="h3" id="demo">
                      Demo
                    </Heading>
                    <SimpleGrid columns={[1, 2, 3]} spacing={5}>
                      {Object.entries(Projects[projectName].demo.image).map((image) => {
                        return (
                          <div key={image[0]} className="flex-cards">
                            <Card maxW="sm" style={{ width: "100%" }}>
                              <CardBody id="demo-images">
                                <Image
                                  src={image[1]}
                                  alt={image[0]}
                                  borderRadius="lg"
                                />
                              </CardBody>
                            </Card>
                          </div>
                        );
                      })}
                    </SimpleGrid>
                  </>
                )}

                {Projects[projectName].demo.video && (
                  <>
                    <Heading as="h3" id="demo">
                      Demo
                    </Heading>

                    <Box
                      as="iframe"
                      src={Projects[projectName].demo.video}
                      width="100%"
                      allow="autoplay"
                      sx={{
                        aspectRatio: "16/9",
                      }}
                    />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectDemo;
