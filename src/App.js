import { GoogleOAuthProvider } from "@react-oauth/google";
import Router from "./Router";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
        <Router />
      </GoogleOAuthProvider>
    </RecoilRoot>
  );
}

export default App;
