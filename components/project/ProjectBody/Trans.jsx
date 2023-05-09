/* eslint-disable react/no-unescaped-entities */
import { Heading, Text } from "@chakra-ui/react";

function Trans() {
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
                  Trans is a comprehensive translation mobile application
                  designed to provide seamless translation of various types of
                  content including text, image, files and audio. It was
                  developed as part of the Google student developer challenge in
                  2021 by my team and I. As a student from the Igbo ethnic group
                  studying in a different ethnic environment, the project was
                  inspired by the need to bridge the language gap and promote
                  cultural integration. The cultural diversity in various
                  academic environments often presents a language barrier for
                  students and this was the problem that led to the development
                  of Trans.
                </Text>
                <Heading as="h3">Trans PWA</Heading>

                <Text>
                  Trans provides a comprehensive approach to translation,
                  allowing users to translate text, image, files, and audio
                  easily. The application utilizes Google APIs and AI and ML
                  models to train data that can recognize the input provided by
                  users
                </Text>
                <Heading as="h3" id="tech">
                  Design
                </Heading>

                <Text>
                  The inspiration for Trans' UI design came from the need to
                  create an intuitive and user-friendly interface that promotes
                  ease of use and quick access to features.
                </Text>

                <Heading as="h3">Tech</Heading>

                <Text>
                  Python Flask was used to develop the backend of the
                  application while Google Chrome was used to package the mobile
                  app as PWA.
                </Text>

                <Heading as="h3">Achievements</Heading>

                <Text>
                  Trans was recognized by Google as one of the best submissions
                  out of about 1900 different schools during the Google student
                  developer challenge in 2021.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Trans;
