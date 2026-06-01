import { Accordion, AccordionBody, AccordionHeading, AccordionItem, AccordionPanel, AccordionTrigger, Card, Link, Table, TableBody, TableCell, TableColumn, TableContent, TableHeader, TableResizableContainer, TableScrollContainer } from "@heroui/react";

import { Box, ChevronDown, CircleDollar, Wrench } from '@gravity-ui/icons';

import styles from "./styles/home.module.css";

export default function Home() {
  return (
    <span className={styles.container}>
      <div className={styles.buffer}></div>

      <h1 className={styles.header}>Ethan's Manufacturing</h1>
      <p>Get your creations 3D printed!</p>

      <div className={`flex flex-wrap gap-4 ${styles.cards}`}>
        <Card className={`w-15/48`}>
          <h2>&#127752; Colorful!</h2>

          <p>A wide range of colors are avalible for your parts. All the same price!</p>
        </Card>

        <Card className={`w-15/48`}>
          <h2>&#128207; Dimentionally Accurate</h2>

          <p>The parts will be with in X.XXmm of the provided file</p>
        </Card>

        <Card className={`w-15/48`}>
          <h2>&#128345; Quick turn around times</h2>

          <p>As low as same day shipping with next day delviery!</p>

          <small>Varies with amount of parts, size of parts, etc</small>
        </Card>
      </div>

      <div className={`grid`}>
        <div className={`col1 ${styles.faq}`}>
        <h2>Frequently Asked Questions</h2>
        
          <Accordion className={`w-full max-w-md" variant="surface ${styles["faq_dropdown"]}`}>
            <AccordionItem>
              <AccordionTrigger>
                <span className="mr-3 size-4 shrink-0 text-muted"><CircleDollar /></span>
                What is your pricing?
                <Accordion.Indicator>
                  <ChevronDown />
                </Accordion.Indicator>
              </AccordionTrigger>
              <AccordionPanel>
                We price based on how much material it takes to print your part and how much shipping is. You can get a <Link>free quote</Link>!
              </AccordionPanel>
            </AccordionItem>
            
            <AccordionItem>
              <AccordionTrigger>
                <span className="mr-3 size-4 shrink-0 text-muted"><Wrench /></span>
                What are your production times?
                <Accordion.Indicator>
                  <ChevronDown />
                </Accordion.Indicator>
              </AccordionTrigger>
              <AccordionPanel>
                It varies depending on number of current clients, and the part itself. It can be as quick as production starting the same day you placed the order.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <AccordionTrigger>
                <span className="mr-3 size-4 shrink-0 text-muted"><Box /></span>
                What are your shipping times?
                <Accordion.Indicator>
                  <ChevronDown />
                </Accordion.Indicator>
              </AccordionTrigger>
              <AccordionPanel>
                It can be as quick as next day delivery once production is finished! We offer more econimical shipping options that due take longer to arrivle. In the United States 
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>

        <div className={`col2 ${styles.specs}`}>
          <h2>Specifications</h2>
          
          <Table>
            <TableScrollContainer> 
              <TableContent>
                <TableHeader>
                  <TableColumn isRowHeader>Feature</TableColumn>
                  <TableColumn>Value</TableColumn>
                </TableHeader>

                <TableBody>
                  <Table.Row>
                    <TableCell>Max Size</TableCell>
                    <TableCell>180mmx180mmx180mm</TableCell>
                  </Table.Row>

                  <Table.Row>
                    <TableCell>Minimum Tolerenes</TableCell>
                    <TableCell>X.XXmm</TableCell>
                  </Table.Row>

                  <Table.Row>
                    <TableCell>Minimum recomended part size</TableCell>
                    <TableCell>20mx20mmx5mm</TableCell>
                  </Table.Row>
                </TableBody>
              </TableContent>
            </TableScrollContainer>
          </Table>
        </div>
      </div>
    </span>
  );
};