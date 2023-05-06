import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import Projects from "../../src/data/project.json";
import "../../src/styles/home/SampleProjects.scss";

// eslint-disable-next-line react/prop-types
function SampleProjects({ project, direction }) {

  const flexDirection = direction === "left" ? "row-reverse" : "row";

  return (
    <section className="container">
      <div className="container-wrapper">
        <div className="project">
          <Card
            direction={{ base: "column", md: flexDirection }}
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
                  <Link href={`/${project}`} isExternal>
                    {Projects[project]["name"]}
                  </Link>
                  <Box h="1px" bg="gray.400" my="3" />
                </Heading>

                <Heading as="h4" size="lg">
                  {Projects[project]["duration"]}
                </Heading>
                <UnorderedList>
                  {Projects[project]["role"].map((role, index) => (
                    <ListItem key={index}>{role}</ListItem>
                  ))}
                </UnorderedList>
              </CardBody>
            </Stack>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default SampleProjects;
