import { Heading, Text } from "@chakra-ui/react";

function BatteryReminder() {
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
                  When I started learning Python, I noticed that I was often
                  unaware of when my laptop battery was fully charged. The
                  computer manual warned that overcharging could damage the
                  battery and recommended not letting the battery percentage
                  drop below a certain level. This led me to create the Battery
                  Reminder application.
                </Text>
                <Heading as="h3">Solution</Heading>

                <Text>
                  The design of Battery Reminder is focused on simplicity and
                  functionality, with a clear and intuitive user interface.
                </Text>

                <Heading as="h3">Tech</Heading>

                <Text>Python 3.x and Tkinter Module</Text>

                <Heading as="h3">Achievements</Heading>

                <Text>
                  The software has been tested and used by a friend, who has
                  given positive feedback about its functionality and
                  usefulness.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BatteryReminder;
