import type {Metadata}
from "next";
import './globals.scss';
import {Provider} from "react-redux";

export default function RootLayout({children} : Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <html lang="ru">
            <body>наложене {children}
            </body>
        </html>
    );
}
