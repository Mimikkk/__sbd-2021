import { DocumentProps, Html, Head, Main, NextScript } from 'next/document';
import { FC } from 'react';

export const DocumentComponent: FC<DocumentProps> = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
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
