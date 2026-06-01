import { Accordion, AccordionItem, AccordionPanel, AccordionTrigger, Separator } from '@heroui/react';

import { Box, ChevronDown, CircleDollar, Wrench } from '@gravity-ui/icons';

import styles from "../styles/process.module.css";

export default function Process() {
    return (
        <span className={`${styles.container}`}>
            <div className={styles.buffer}></div>

            <h1 className={styles.header}>Process</h1>
            <p>Making things is more complicated than pressing order, throwing it in a box and putting it in a mailbox to be shipped. It is a multistep process to ensure the highest quality parts.</p>

            <Separator className={`${styles.divider}`} />

            <h2>Step 1: Submit the print</h2>
            <p>Once you submit the print we look at the model(s) and set them up in the software we use to print. We will orient them and change all the settings to your specifications.</p>

            <h2>Step 2: Print it!</h2>
            <p>Once its set up in our software we start printing as soon as possible. We load the color you want and press print. We moniter the printers to make sure nothing goes wrong</p>
        
            <h2>Step 3: Inspection</h2>
            <p>Once its done printing, we inspect all the parts to make sure it all printed correctly without any flaws</p>

            <h2>Step 4: Sending the parts to you!</h2>
            <p>Once all the parts are inspected we package them and ship it to you with the method of your choice.</p>

            <Separator className={`${styles.divider}`} />
            
            <h2>Frequently Asked Questions</h2>
        
            <Accordion className={`w-full max-w-md" variant="surface ${styles["faq_dropdown"]}`}>
                <AccordionItem>
                <AccordionTrigger>
                    <span className="mr-3 size-4 shrink-0 text-muted"><CircleDollar /></span>
                    What happens if something goes wrong while printing?
                    <Accordion.Indicator>
                    <ChevronDown />
                    </Accordion.Indicator>
                </AccordionTrigger>
                <AccordionPanel>
                    If something goes wrong whule printing, we will reprint it with no extra charge. We wont charge you for something that is not your fault.
                </AccordionPanel>
                </AccordionItem>
                
                <AccordionItem>
                <AccordionTrigger>
                    <span className="mr-3 size-4 shrink-0 text-muted"><Wrench /></span>
                    You see something wrong with the model, what happens?
                    <Accordion.Indicator>
                    <ChevronDown />
                    </Accordion.Indicator>
                </AccordionTrigger>
                <AccordionPanel>
                    If we see something wrong we will not print the part. We will contact you with the issue and work with you on resolving the issue.
                </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </span>
    );
};