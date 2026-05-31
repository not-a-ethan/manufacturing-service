import { Button } from "@heroui/react";

import styles from "./styles/nav.module.css";

export function Navbar() {
    return (
        <nav className={`sticky top-0 z-40 w-full border-separator bg-background/70 backdrop-blur-lg`}>
            <header className={`flex h-16 items-center justify-between px-6`}>
                <a href="/" className={`${styles.logo} flex items-center gap-3`}>Ethans<br />Manfucaturing</a>

                <ul className="flex items-center gap-4">
                    <li><Button variant="tertiary">Process</Button></li>
                    <li><Button variant="tertiary">Free Quote</Button></li>
                    <li>
                        <Button>Log In/Signup</Button>
                    </li>
                </ul>
            </header>
        </nav>
    )
};