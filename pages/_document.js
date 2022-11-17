import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps, locale: ctx?.locale || "en" };
      }
    
    render() {
        return (
          <Html
            // dir={this.props.locale === "ar" ? "rtl" : "ltr"}
          // lang={this.props.locale}
          >
            <Head>
              <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600&display=swap"
                rel="stylesheet"
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,100;1,300;1,400;1,500&display=swap"
                rel="stylesheet"
              />
              <link rel="icon" type="image/png" href="/favicon.png"></link>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
    }
}

export default MyDocument;