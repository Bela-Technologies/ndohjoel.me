import { Heading, ListItem, Text, UnorderedList } from "@chakra-ui/react";

function AiQuiz() {
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
                  After learning PostgreSQL for the first time, I wanted to
                  apply the main concepts to create a real-world application.
                  With the current trend in AI, I decided to create a quiz
                  application that uses AI to generate its questions based on
                  various subjects and topics.
                </Text>
                <Heading as="h3">AI Generated Questions</Heading>

                <Text>
                  The AI Chat is a quiz application that uses GPT-3 open source
                  model for generating questions. It is built using Node.js for
                  the server, EJS for rendering the UI, and PostgreSQL as the
                  database. The AI-powered question generator makes it possible
                  to provide a unique and challenging quiz experience to users.
                </Text>
                <Heading as="h3">Design</Heading>

                <Text>
                  The design inspiration behind AI Chat was to create a simple,
                  clean, and user-friendly interface. The UI was designed with
                  EJS, and the focus was on ensuring that the design did not
                  distract from the main goal of the application, which is to
                  provide an engaging and challenging quiz experience.
                </Text>
                <Heading as="h3" id="tech">
                  Tech
                </Heading>

                <Text>
                  <UnorderedList>
                    <ListItem>Node.js</ListItem>
                    <ListItem>EJS</ListItem>
                    <ListItem>PostgreSQL</ListItem>
                    <ListItem>GPT-3 open source model</ListItem>
                  </UnorderedList>
                </Text>

                <Heading as="h3">Achievements</Heading>

                <Text>
                  The AI Chat project was a success in achieving its goal of
                  providing an engaging and challenging quiz experience to
                  users. It also helped me to solidify my understanding of
                  PostgreSQL and AI-powered applications.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AiQuiz;
