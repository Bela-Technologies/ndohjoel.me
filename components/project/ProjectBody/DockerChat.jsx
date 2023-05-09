import {
  Heading,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

function DockerChat() {
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
                  <strong>Here are some demo login details:</strong>
                  <OrderedList>
                    <ListItem>
                      <span>
                        {" "}
                        <strong> Email:</strong>{" "}
                      </span>
                      user4@mail.com
                    </ListItem>
                    <ListItem>
                      <span>
                        {" "}
                        <strong> Password:</strong>{" "}
                      </span>
                      P4ssword
                    </ListItem>
                    <ListItem>
                      <span>
                        {" "}
                        <strong> Email:</strong>{" "}
                      </span>
                      user2@mail.com
                    </ListItem>
                    <ListItem>
                      <span>
                        {" "}
                        <strong> Password:</strong>{" "}
                      </span>
                      P4ssword
                    </ListItem>
                  </OrderedList>
                </Text>
                <Text>
                  After completing a course in Docker and Kubernetes, I wanted
                  to test my skills by creating a real-time chat application
                  using multiple containers.
                </Text>

                <Heading as="h3">Real-time Chat Application</Heading>

                <Text>
                  The Docker Chat is a real-time chat application that provides
                  users with a seamless communication experience. It allows
                  users to send and receive messages instantly, and create chat
                  rooms for multiple users.
                </Text>
                <Heading as="h3">Design</Heading>

                <Text>
                  The inspiration behind the UI was to create a user-friendly
                  chat application with an intuitive interface. The design was
                  kept simple and modern, with a focus on the chat
                  functionality.
                </Text>
                <Heading as="h3" id="tech">
                  Design
                </Heading>

                <Text>
                  <UnorderedList>
                    <ListItem>
                      <span>
                        {" "}
                        <strong> Backend:</strong>{" "}
                      </span>
                      The server was built using Javascript Node.js and
                      Dockerized into an image.
                    </ListItem>
                    <ListItem>
                      <span>
                        {" "}
                        <strong> Frontend:</strong>{" "}
                      </span>
                      The frontend was built using React and Firebase was used
                      to handle authentication and authorization of the web
                      application. The frontend was also Dockerized into an
                      image.
                    </ListItem>
                    <ListItem>
                      <span>
                        {" "}
                        <strong> Socket.io Server: </strong>{" "}
                      </span>
                      TThe Socket.io server, created using Node.js, was also
                      deployed as a Docker image.
                    </ListItem>
                    <ListItem>
                      <span>
                        {" "}
                        <strong> Nginx: </strong>{" "}
                      </span>
                      The Nginx image was used for routing traffic into our
                      server to avoid exposing our server to the outside world.
                    </ListItem>
                  </UnorderedList>
                </Text>

                <Heading as="h3">Achievements</Heading>

                <Text>
                  The Docker Chat project was recognized for its innovative
                  approach to building real-time chat applications. It helped in
                  sharpening my skills and provided a stepping stone in knowing
                  how to build robust microservices using Docker images and
                  managing these containers using Kubernetes.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DockerChat;
