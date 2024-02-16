import { GoogleOAuthProvider } from "@react-oauth/google";
import Router from "./Router";
import { RecoilRoot } from "recoil";
import { GlobalStyle } from "./styles/GlobalStyle";

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <Router />
      </GoogleOAuthProvider>
    </RecoilRoot>
  );
}

export default App;
