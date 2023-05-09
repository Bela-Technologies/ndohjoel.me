import {
    Box,
    Card,
    CardBody,
    Heading,
    Image,
    Link,
    Stack,
    Text,
  } from "@chakra-ui/react";
  import Recognitions from "../../src/data/recognitions.json";
  import "../../src/styles/recognition/RecognitionList.scss"
  
  // eslint-disable-next-line react/prop-types
  function RecognitionsList({ recognition, direction }) {
  
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
                src={Recognitions[recognition].image}
                alt={Recognitions[recognition].header}
              />
  
              <Stack flex="1" minW={{ base: "100%", md: "50%" }}>
                <CardBody>
                  <Heading size="sm" className="recognition-header">
                    <Link href={`${Recognitions[recognition].url}`}>
                      {Recognitions[recognition].header}
                    </Link>
                    <Box h="1px" bg="gray.400" my="3" />
                  </Heading>

                  <Text>{Recognitions[recognition].body}</Text>
  
                </CardBody>
              </Stack>
            </Card>
          </div>
        </div>
      </section>
    );
  }
  
  export default RecognitionsList;
  