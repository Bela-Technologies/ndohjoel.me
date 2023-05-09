import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import Socials from "../../src/data/socials.json";
import "../../src/styles/about/AboutMe.scss";

function AboutMe() {
  return (
    <section className="container">
      <div className="container-wrapper">
        <div className="about-me">
          <Card
            direction={{ base: "column", md: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Stack>
              <Image
                objectFit="cover"
                maxW={{ base: "100%", md: "100%" }}
                src={Socials["about-me-long"]}
                alt="Ndoh Joel"
              />
            </Stack>

            <Stack flex="0" minW={{ base: "50%", md: "50%" }}>
              <CardBody>
                <Heading size="md">👋🏽</Heading>

                <Text as="h4" size="md">
                    <h4>Software Engineering Student in Lagos, Nigeria</h4>

                    <h4>I like to <a href={Socials.twitter}>tweet</a> about tech, business and football</h4>

                    <h4>If you’re looking for my professional experience, don’t worry, I got <a href={Socials.linkedIn}>LinkedIn </a> and I publish Tech <a href={Socials.dev}>Articles</a> as well</h4>
                </Text>
              </CardBody>
            </Stack>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
