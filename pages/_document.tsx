import { DocumentProps, Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

export const DocumentComponent: FC<DocumentProps> = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <title>Sbd-Tennis</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default DocumentComponent;
