/* eslint-disable react/no-unescaped-entities */
import { Heading, Link, Text } from "@chakra-ui/react";

function TsxSpreadsheet() {
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
                  Prior to the creation of{" "}
                  <Link href="/project/marist-pedia">Marist Pedia's</Link>{" "}
                  customized spreadsheet, quiz auditors encountered difficulties
                  when creating questions in Excel spreadsheets. Specifically,
                  they found it challenging to input mathematical, Chemistry and
                  Physics symbols, and often formatted their excel tables
                  incorrectly, making it difficult for the Marist Pedia Software
                  to read through the spreadsheet.
                </Text>
                <Heading as="h3">Input Complex Symbols</Heading>

                <Text>
                  To address this issue, we developed the TSX spreadsheet
                  software. TSX makes it easy for quiz auditors to create
                  questions using the necessary symbols, without worrying about
                  formatting issues. The software also eliminates the need for
                  quiz auditors to create specific random question files, as the
                  software is able to shuffle questions from the question files.
                </Text>
                <Heading as="h3" id="tech">
                  Design
                </Heading>

                <Text>
                  In building TSX, we utilized ElectronJS and a simple design
                  concept to deliver a user-friendly product.
                </Text>

                <Heading as="h3">Achievements</Heading>

                <Text>
                  TSX has been implemented by nine schools annually, providing
                  an efficient solution for Marist Pedia quiz auditors to create
                  and format questions for the software.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TsxSpreadsheet;
