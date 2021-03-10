import bootswatch from 'bootswatch/dist/darkly/bootstrap.min.css';
import  FunctionalsProvider  from '../context/content';



export default function MyApp({ Component, pageProps }) {
    return (
    <FunctionalsProvider>
      <Component {...pageProps} />
    </FunctionalsProvider>
    )
  }