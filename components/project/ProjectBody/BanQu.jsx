/* eslint-disable react/no-unescaped-entities */
import { Heading, Link, Text } from "@chakra-ui/react";
import "../../../src/styles/Project/ProjectBody.scss";

function BanQu() {
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
                  The 半区 app was created at a time when there was a total
                  divide between work life and personal time and leisure. The
                  goal was to provide an easy way for people to communicate and
                  share interests. The CEO,{" "}
                  <Link href="https://www.linkedin.com/in/stevenhhb/">
                    Huang Haobing{" "}
                  </Link>{" "}
                  , posted a job opening for the project, and I was fortunate
                  enough to be selected to join the team as the lead backend
                  developer.
                </Text>
                <Heading as="h3" id="tech">
                  Connect and Share Interest
                </Heading>

                <Text>
                半区 is an instant messaging community app that aims to
                  bridge the gap between work and personal life by providing a
                  platform for people to communicate and share their interests.
                  The software comes with a range of features such as instant
                  group chats, personal homepages, channel squares, and more.
                  The app provides an easy way for users to interact online,
                  make new friends, and share their ideas. One of the key
                  highlights of 半区 is its rich dating function, which
                  provides users with more dating information. The app also
                  makes online social networking more convenient, meeting
                  everyone's needs for making friends at any time. Additionally,
                  the app provides a brand-new way of making friends, where
                  everyone completes the friendship interaction and finds
                  like-minded people. Another important aspect of the app is the
                  emphasis on user privacy and authenticity. 半区 encourages
                  users to use their real names and complete identity
                  verification to build trust and create a more comfortable and
                  relaxing environment for users. The platform provides basic
                  information screening to ensure that users have a safe and
                  secure online experience.
                </Text>

                <Heading as="h3" >
                  Tech
                </Heading>

                <Text>
                  The app was built using a range of technologies, with the
                  backend being written in Node.js and the database in
                  PostgreSQL. The use of Alicloud service was also critical to
                  meeting customer demands, given that a significant portion of
                  the target audience resides in China. The software
                  architecture used was clean architecture, which helped to
                  maintain code quality and reduce technical debt.
                </Text>

                <Heading as="h3">
                  Achievements
                </Heading>

                <Text>
                  As the lead backend developer, I played a key role in
                  launching the first version of the app, which helped the
                  startup secure funding of about $335k. During my time at
                  半区, I honed my communication skills because we had
                  different people on the team working from Nigeria, India,
                  China, Canada, and the USA. We all had to be in sync despite
                  the time differences.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BanQu;
