import {
  Box,
  Card,
  CardBody,
  Heading,
  Icon,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { FaAndroid, FaAppStore } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import Projects from "../../src/data/project.json";
import "../../src/styles/project/ProjectInfo.scss";

// eslint-disable-next-line react/prop-types
function ProjectInfo({ project }) {
  return (
    <section className="container">
      <div className="container-wrapper">
        <div className="project">
          <Card
            direction={{ base: "column", md: "row-reverse" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", md: "50%" }}
              src={Projects[project]["home-url"]}
              alt={Projects[project]["name"]}
            />

            <Stack flex="1" minW={{ base: "100%", md: "50%" }}>
              <CardBody>
                <Heading size="md">
                  {Projects[project]["name"]}
                  <Box h="1px" bg="gray.400" my="3" />
                </Heading>

                <Heading as="h4" size="lg" className="project-details">
                  {Projects[project]["duration"]} • {Projects[project].type}{" "}
                  {Projects[project]["role"].map((role, index) => (
                    <span key={index}> • {role}</span>
                  ))}
                </Heading>
                <Box className="project-external-links">
                  {Projects[project].url.website && (
                    <>
                      <Heading as="h5" size="lg">
                        <Link href={Projects[project].url.website} isExternal>
                          <Icon as={FiExternalLink} />
                        </Link>
                      </Heading>
                    </>
                  )}

                  {Projects[project].url.ios && (
                    <>
                      <Heading as="h5" size="lg">
                        <Link href={Projects[project].url.ios} isExternal>
                          <Icon as={FaAppStore} />
                        </Link>
                      </Heading>
                    </>
                  )}

                  {Projects[project].url.android && (
                    <>
                      <Heading as="h5" size="lg">
                        <Link href={Projects[project].url.android} isExternal>
                          <Icon as={FaAndroid} />
                        </Link>
                      </Heading>
                    </>
                  )}
                </Box>
              </CardBody>
            </Stack>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ProjectInfo;
