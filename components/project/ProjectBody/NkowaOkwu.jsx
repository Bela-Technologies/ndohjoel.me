import { Heading, Text } from "@chakra-ui/react";

function NkowaOkwu() {
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
                  As an open-source project, I am only a contributor to Nkowa
                  Okwu. However, I love the fact that the project aims to create
                  a central point for all things Igbo language online, making it
                  possible to integrate the language with anything tech-related.
                </Text>
                <Heading as="h3">Nkọwa Okwu</Heading>

                <Text>
                  Nkọwa okwu is a technology company that focuses on building
                  accessible and robust Igbo language learning tools. The
                  project is based on the belief that Igbo education should be
                  free and easy to access. With over 20 known dialects, the Igbo
                  Dictionary provides users with word searches, voice
                  recordings, accented words, parts of speech, variations,
                  definitions, example sentences, and dialectal variations.
                </Text>
                <Heading as="h3" id="tech">
                  Design
                </Heading>

                <Text>
                  The inspiration behind the UI design is to make the Igbo
                  language accessible and user-friendly to anyone who wants to
                  learn it. The design was created with simplicity and ease of
                  use in mind.
                </Text>

                <Heading as="h3">Tech</Heading>

                <Text>
                  The Igbo API hosts over 4,500 words, 14,500 example Igbo
                  sentences, 4,500 audio pronunciations, and 17 dialectal
                  variations. Nkọwa okwu leverages this API to create a robust
                  platform that can support open-contributions from anyone. With
                  the ability to add words, dialectal variations, and example
                  Igbo sentences, users from anywhere in the world can change
                  and update the Igbo Dictionary by submitting a suggested edit.
                </Text>

                <Heading as="h3">Achievements</Heading>

                <Text>
                  As a contributor to the dashboard API, I am proud to have
                  contributed to making it very easy for developers who consume
                  our API to see analytics and also have a playground where they
                  can test the APIs.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NkowaOkwu;
