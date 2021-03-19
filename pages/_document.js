import Document, { Html, Head, Main, NextScript } from 'next/document'
import HeadComponent from '../components/headComponent'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="es">
          
        <Head />
        <HeadComponent/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;