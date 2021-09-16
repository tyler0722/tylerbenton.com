import '../scss/main.scss';

import { AppProps } from 'next/dist/shared/lib/router/router';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
