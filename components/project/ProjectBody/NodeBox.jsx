import { Heading, Text } from '@chakra-ui/react';

function NodeBox() {
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
                    Node.js is a popular runtime environment for developing server-side applications. However, deploying Node.js applications can sometimes be a daunting task for developers, especially when it comes to managing dependencies, configuring environments, and deploying to different hosting platforms. This led me to develop NodeBox, a web service aimed at making it easy for developers to deploy their Node.js applications and dockerize other applications.
                    </Text>
                    <Heading as="h3">NodeBox In Progress</Heading>
    
                    <Text>
                    NodeBox simplifies the deployment process by providing a user-friendly interface for developers to deploy their Node.js applications with ease. The platform allows developers to easily connect their GitHub repository and use well-written CI/CD YAML files like GitHub Actions to automate the deployment process. Additionally, NodeBox supports easy configuration of environments and management of dependencies, making it simple to deploy applications to different hosting platforms.
                    </Text>
                    <Heading as="h3" id="tech">
                      Design
                    </Heading>
    
                    <Text>

                    The design of NodeBox is inspired by simplicity and ease of use. The user interface is intuitive and easy to navigate, providing developers with all the necessary tools to deploy their applications with minimal effort.

                    </Text>
    
                    <Heading as="h3">Tech</Heading>
    
                    <Text>
                    NodeBox is built using a variety of cutting-edge technologies, including Node.js, Docker, Kubernetes, and GitHub Actions. The platform leverages the power of these technologies to provide developers with a seamless deployment experience.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
}

export default NodeBox