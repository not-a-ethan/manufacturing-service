import { Button, Form, Label, Input, Select, SelectTrigger, SelectValue, SelectIndicator, SelectPopover, ListBox, ListBoxItem } from "@heroui/react";

import styles from "../styles/quote.module.css";

export default function Quote() {
    return (
        <span className={`${styles.container}`}>
            <h1 className={`${styles.header}`}>Free quote now!</h1>
            <p>Get a free quote</p>

            <div className={styles.buffer}></div>

            <Form>
                <Label htmlFor="files">Files to print</Label>
                <br />
                <Input type="file" accept="model/step,model/stl,model/3mf" id="files" className={`${styles.files}`} />

                <br />
                <br />

                <Label htmlFor="walls"># of walls</Label>
                <Input type="number" min={1} id="walls" />

                <Label htmlFor="infillPercent" className={`${styles.options}`}>Infill %</Label>
                <Input type="number" min={0} max={100} id="infillPercent" />

                <Select defaultValue={"grid"} className={`${styles.infillType} ${styles.options}`}>
                    <Label>Infil Type</Label>
                    <SelectTrigger className={`${styles.infilTypeOptions}`}>
                        <SelectValue />
                        <SelectIndicator />
                    </SelectTrigger>
                    <SelectPopover>
                        <ListBox>
                            <ListBoxItem id="grid" textValue="grid">Grid</ListBoxItem>
                            <ListBoxItem id="crosszag" textValue="crosszag">Cross Zag</ListBoxItem>
                            <ListBoxItem id="gyroid" textValue="gyroid">Gyroid</ListBoxItem>
                            <ListBoxItem id="lighting" textValue="lighting">Lighting</ListBoxItem>
                            <ListBoxItem id="honeycomb" textValue="honeycomb">Honeycomb</ListBoxItem>
                        </ListBox>
                    </SelectPopover>
                </Select>

                <br />
                <br />

                <Button type="submit">Get quote</Button>
            </Form>
        </span>
    );
};