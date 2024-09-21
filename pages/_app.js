import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import { ThemeProvider } from "next-themes";
import { Provider } from 'react-redux';
import store from "../redux/store/store";
import AxiosInterceptors from "../utils/axios-interceptors";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
      <Provider store={store}>
      <AxiosInterceptors />
        <Sidebar>
      <Header />
          <Component {...pageProps} />
        </Sidebar>
        </Provider>
      </ThemeProvider>
    </>
  );
}
