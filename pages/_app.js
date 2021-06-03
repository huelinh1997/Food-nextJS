import '../styles/globals.css';
import App from 'next/app';
import React from 'react';
import useRouteUrlHistory from '../Hooks/useRouterHistory';
import { wrapper } from '../redux/store';
import '../scss/App.scss';
import 'react-tabs/style/react-tabs.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PreviousRouteContext = React.createContext();

function MyApp({ Component, pageProps, err }) {
  const { previousRouteQuery, resetQueryHistory } = useRouteUrlHistory();
  return (
    <PreviousRouteContext.Provider
      value={{ ...previousRouteQuery, ...resetQueryHistory }}
    >
      <Component
        {...pageProps}
        runtimeException={err}
        previousRouteQuery={previousRouteQuery}
        resetQueryHistory={resetQueryHistory}
      />
    </PreviousRouteContext.Provider>
  );
}

MyApp.getInitialProps = async appContext => ({
  ...(await App.getInitialProps(appContext)),
});

export default wrapper.withRedux(MyApp);
