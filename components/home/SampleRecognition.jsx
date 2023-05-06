import {
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import "../../src/styles/home/SampleRecognition.scss";
import Recognitions from "../../src/data/recognitions.json";

function SampleRecognition() {
  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <div className="container-wrapper">
          <div className="recognition">
            <Stack direction={["column", "column", "row"]} spacing="3">
              <div className="flex-cards">
                <Card maxW="sm" style={{ width: "100%" }}>
                  <CardBody>
                    <Image
                      src={Recognitions["nkowa-okwu"].image}
                      alt={Recognitions["nkowa-okwu"].header}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">
                        {Recognitions["nkowa-okwu"].header}
                      </Heading>
                      <Text>{Recognitions["nkowa-okwu"].body}</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                </Card>
              </div>
              <div className="flex-cards">
                <Card maxW="sm" style={{ width: "100%" }}>
                  <CardBody>
                    <Image
                      src={Recognitions["google-dev"].image}
                      alt={Recognitions["google-dev"].header}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">
                        {Recognitions["google-dev"].header}
                      </Heading>
                      <Text>{Recognitions["google-dev"].body}</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                </Card>
              </div>
              <div className="flex-cards">
                <Card maxW="sm" style={{ width: "100%" }}>
                  <CardBody>
                    <Image
                      src={Recognitions["ioi-rep"].image}
                      alt={Recognitions["ioi-rep"].header}
                      borderRadius="lg"
                    />
                    <Stack mt="6" spacing="3">
                      <Heading size="md">
                        {Recognitions["ioi-rep"].header}
                      </Heading>
                      <Text>{Recognitions["ioi-rep"].body}</Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                </Card>
              </div>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleRecognition;
