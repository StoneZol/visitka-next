import './globals.scss';

export default function RootLayout({children} : Readonly < {
    children: React.ReactNode;
} >) {
    return (
        <html lang="ru">
            <head>
                <meta name="description" content="Визитка Stone_Zol"/>
                <meta
                    name="keywords"
                    content="React, Next.js, Frontend, Программирование, Веб-разработка, Визитка, Фронтенд "/>
                <meta name="author" content="Stone_Zol"/> 
                {/* Open Graph (OG) мета-теги */}
                <meta property="og:title" content="StoneZol"/>
                <meta property="og:description" content="Обо мне"/>
                <meta property="og:image" content="/src/shared/Static/avatars/b3.webp"/>
                <meta property="og:url" content="https://visitka-next.vercel.app/"/>
                <meta property="og:type" content="website"/>

                <title>Stone_Zol</title>
                <link rel="icon" href="/favicon.ico"/>
            </head>
            <body>{children}
            </body>
        </html>
    );
}
