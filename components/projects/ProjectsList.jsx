import {
  Badge,
  Card,
  CardBody,
  Divider,
  Grid,
  GridItem,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import "../../src/styles/home/SampleRecognition.scss";
import "../../src/styles/projects/ProjectList.scss";
import Projects from "../../src/data/project.json";

// eslint-disable-next-line react/prop-types
function ProjectsList({ projectType }) {
  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div className="container-wrapper">
          <div className="recognition">
            <SimpleGrid columns={[1, 2, 3]} spacing={5}>
              {Object.entries(Projects).map((project) => {
                if (project[1].type === projectType) {
                  return (
                    <div key={project[0]} className="flex-cards">
                      <Card maxW="sm" style={{ width: "100%" }}>
                        <CardBody>
                          <Image
                            src={project[1]["preview-url"]}
                            alt={project[1].name}
                            borderRadius="lg"
                          />
                          <Stack mt="6" spacing="3">
                            <Heading size="md">
                              <Link>{project[1].name}</Link>
                              <Badge marginLeft=".5rem" colorScheme="green">
                                {project[1]["in-progress"] === true
                                  ? "In Progress"
                                  : ""}
                              </Badge>
                            </Heading>
                            <Text>{project[1].brief}</Text>
                          </Stack>
                          <Divider />
                          <Grid
                            h="2rem"
                            templateRows="repeat(1, 1fr)"
                            templateColumns="repeat(5, 1fr)"
                          >
                            <GridItem rowSpan={2} colSpan={1} >
                              <p>Role(s)</p>
                            </GridItem>
                            <GridItem colSpan={4}>
                              {project[1].role.map((role, index) => (
                                <Link key={index}>{role}</Link>
                              ))}
                            </GridItem>
                          </Grid>
                        </CardBody>
                      </Card>
                    </div>
                  );
                }
              })}
            </SimpleGrid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;
