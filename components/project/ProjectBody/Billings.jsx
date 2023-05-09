import { Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

function Billings() {
    const styles = {
        paddingBottom: 0 
    }
  return (
    <>
      <section className="container"  id="problem">
        <div className="container-wrapper" style={styles}>
          <div className="projects">
            <div className="projects-header">
              <div className="projects-header-title" id="solution">
                <Text>
                  During our days in school, it was a common struggle to pay for
                  taxi rides from the hostel to the school campus. We often
                  encountered challenges where we did not have cash at hand, and
                  transferring small amounts such as 50 or 100 Naira was almost
                  insignificant. As a result, we had to do a transfer of 500
                  Naira for a journey of 50 Naira or purchase something
                  unnecessary to get change to settle the driver.
                </Text>
                <Heading as="h3">
                  Scan And Pay
                </Heading>

                <Text>
                  To address this challenge, we created an application that
                  enables students to easily fund their wallet and make small
                  transactions to merchants with ease. The transaction is
                  completed instantly just by scanning and the application
                  provides the user with a seamless experience.
                </Text>

                <Heading as="h3" id="tech">
                  Design
                </Heading>

                <Text>
                  We adopted a simple and minimalist UI design to ensure that
                  the product was delivered within a reasonable timeframe.
                  <UnorderedList>
                    <ListItem>
                      <Link href="hhttps://www.linkedin.com/in/moshoodabidemi/">
                        Abidemi Moshood{" "}
                      </Link>{" "}
                      was the lead frontend developer who played a key role in
                      developing the mobile application.
                    </ListItem>
                    <ListItem>
                      <Link href="https://www.linkedin.com/in/oluwamitimilehin/">
                        Oluwatimilehin Bello
                      </Link>{" "}
                      designed the application, which was brought to life.
                    </ListItem>
                    <ListItem>
                      I handled everything regarding the backend and cloud
                      services used for the application to functions.
                    </ListItem>
                  </UnorderedList>
                </Text>

                <Heading as="h3">
                  Tech
                </Heading>

                <Text>
                  We leveraged Nodejs for the backend and implemented various
                  security measures to prevent security breaches as this was a
                  fintech application. We also utilized various cloud services
                  for scalability and reliability.
                </Text>

                <Heading as="h3" id="tech">
                  Achievements
                </Heading>

                <Text>
                  Despite being students, we were able to onboard about 500
                  users within our first few months of usage through word of
                  mouth advertising, which was a significant accomplishment for
                  us. In summary, the Billings project was developed to solve
                  the problem of inconvenient and difficult payment methods for
                  small transactions faced by students in their day-to-day
                  lives. With the application, students can easily fund their
                  wallet and make small transactions with ease while having a
                  seamless experience.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Billings;
