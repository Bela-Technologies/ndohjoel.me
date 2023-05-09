import { Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

function MaristPedia() {
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
                  As a high school student, I excelled in mathematics and
                  participated in various inter-school and national
                  competitions. However, during the Cowbellpedia TV quiz show,
                  my school always struggled to perform well on the show.
                  Despite preparing theoretically, our performance on the show
                  never matched our preparation. It was only when I{" "}
                  <Link href="https://www.youtube.com/watch?v=Da9UmpdKDc8&t=1417s">
                    participated{" "}
                  </Link>{" "}
                  in the show myself that I realized the difference between
                  answering questions on paper and answering them on a computer
                  in the actual TV quiz show. In 2019, my school presented five
                  participants, including myself, for the first round of the
                  competition, but we all got knocked out in the first round of
                  the TV quiz.
                </Text>
                <Heading as="h3">Replica Practice</Heading>

                <Text>
                  To solve this problem, I set out to build a software that
                  replicates the feel of the TV quiz show. The software was
                  designed to be a perfect match and included several features
                  such as:
                  <UnorderedList>
                    <ListItem>
                      <span>
                        <strong>Flexibility: </strong>{" "}
                      </span>{"   "}
                      We added more flexibility for the quiz auditor such that
                      they can easily use the software not just for mathematical
                      quiz shows but any type of quiz.
                    </ListItem>
                    <ListItem>
                      <span>
                        <strong>Custom Spreadsheet: </strong>{"  "}
                      </span>{"   "}
                      We created a custom <Link href="/project/tsx-spreadsheet">spreadsheet</Link> so
                      that users can easily create questions that require
                      complex mathematical, chemical, and physical symbols.
                    </ListItem>
                    <ListItem>
                      <span>
                        <strong>Insightful Analytics: </strong>
                      </span>{" "}
                      We gave insightful analytics for students such as how fast
                      they are in answering questions to help them know their
                      weaknesses and strengths.
                    </ListItem>
                  </UnorderedList>
                </Text>
                <Heading as="h3" id="tech">
                  Design
                </Heading>

                <Text>
                The design of the software was student-friendly. We paid clear attention to details in order to help teachers input questions and see results of each student and get quality information about each of their students.
                </Text>

                <Heading as="h3">Tech</Heading>

                <Text>
                  The application was created with ElectronJS, making it
                  available for both Windows and MacOS. We used Socket.io to
                  establish a connection between the computers with the master
                  computer from where the questions are generated. Python was
                  also used for some automation in the application.
                </Text>

                <Heading as="h3">Achievements</Heading>

                <Text>
                  We were able to help students prepare effectively for any type
                  of TV quiz show. Currently, nine schools make use of this
                  software each year for various TV quiz shows.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MaristPedia;
