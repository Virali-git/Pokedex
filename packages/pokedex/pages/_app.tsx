import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import Layout from "../Layout";

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
