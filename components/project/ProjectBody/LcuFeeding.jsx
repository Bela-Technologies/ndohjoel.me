/* eslint-disable react/no-unescaped-entities */
import { Heading, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import "../../../src/styles/Project/ProjectBody.scss";

function LcuFeeding() {
    const styles = {
        paddingBottom: 0 
    }
  return (
    <>
      <section className="container" id="problem">
        <div className="container-wrapper" style={styles}>
          <div className="projects">
            <div className="projects-header">
              <div className="projects-header-title" id="solution">
                <Text>
                  The project aims to solve the problem faced by students who
                  stay on campus and use paper meal tickets for accessing meals.
                  These tickets were prone to forgery, causing discrepancies in
                  the accounts and long queues for students when going to
                  collect their tickets each month. Additionally, the cafeteria
                  reported fake figures to the school management, leading to
                  significant losses. To overcome these issues, we created a
                  mobile app and a dashboard for school management and
                  cafeterias to track the activities of students.
                </Text>
                <Heading as="h3">
                  Scan QR and Eat
                </Heading>

                <Text>
                  The mobile app enables students to scan QR codes of
                  restaurants and purchase food effortlessly. The app also
                  provides funding to students each day, eliminating the need to
                  queue for meal tickets at the beginning of each month. The
                  school management dashboard allows easy tracking of student
                  activities, spending, and cafeteria revenues. A separate
                  dashboard for each cafeteria enables monitoring of
                  transactions and prevents fraudulent activities.
                </Text>
                <Heading as="h3" id="tech">
                  Design
                </Heading>

                <Text>
                  We kept the design of the mobile app and dashboard simple and
                  user-friendly. The mobile app has three pages of design, and
                  the dashboard has five pages. This approach helped us complete
                  the first version of the application within three weeks. With
                  the help of:
                  <UnorderedList>
                    <ListItem>
                      <Link href="https://www.linkedin.com/in/jay-stance/">
                        Nwokeji Christian{" "}
                      </Link>{" "}
                      who was our primary front-end developer who designed all
                      the dashboards.
                    </ListItem>
                    <ListItem>
                      <Link href="https://www.linkedin.com/in/promise-sheggsmann-09b733212/">
                        Uchegbunam Promise
                      </Link>{" "}
                      who created the mobile app using React Native.
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
                  We implemented a clean architecture when building the backend
                  of the application, which was written in Node.js. We used
                  various services such as Google Cloud Watch, Cloudunary,
                  Socket.io, and React Native, along with React for the
                  frontend. We employed several security layers to prevent
                  security breaches from external sources. The database runs on
                  MongoDB, and we used Redis to cache specific data for the
                  school management dashboard.
                </Text>

                <Heading as="h3">
                  Achievements
                </Heading>

                <Text>
                  Within the first three months of usage, the project saved the
                  school a significant amount of money and reduced the stress
                  students faced to get their meal tickets each month. It
                  eliminated the manual process of rectifying figures for
                  cafeterias every week and removed limitations on students'
                  access to meals.
                </Text>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LcuFeeding;
