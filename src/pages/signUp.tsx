import { useLogin } from "@refinedev/core";
import { useEffect, useRef } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import SignUpForm from "components/SignUpForm";
import beyangLogo from "assets/beyangLogo.svg";
import { CredentialResponse } from "../interfaces/google";

const SignUp = () => {
  // const { mutate: login } = useLogin<CredentialResponse>();

  // const GoogleButton = (): JSX.Element => {
  //   const divRef = useRef<HTMLDivElement>(null);

  //   useEffect(() => {
  // //     if (typeof window === "undefined" || !window.google || !divRef.current) {
  // //       return;
  // //     }

  // //     try {
  // //       window.google.accounts.id.initialize({
  // //         ux_mode: "popup",
  // //         client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  // //         callback: async (res: CredentialResponse) => {
  // //           if (res.credential) {
  // //             login(res);
  // //           }
  // //         },
  // //       });
  // //       window.google.accounts.id.renderButton(divRef.current, {
  // //         theme: "filled_blue",
  // //         size: "medium",
  // //         type: "standard",
  // //       });
  // //     } catch (error) {
  // //       console.log(error);
  // //     }
  // //   }, []);

  // //   return <div  ref={divRef} />;
  // // };

  return (
    <Container
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fcfcfc",
      }}
    >
      <Box
        display="flex"
        gap="36px"
        justifyContent="center"
        flexDirection="column"
      >
        <SignUpForm />

        <hr style={{ width: "100%" }} />
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          {/* <GoogleButton /> */}
        </div>

        <Typography align="center" color={"text.secondary"} fontSize="12px">
          <img
            style={{ padding: "0 5px", width: "100px" }}
            alt="beynag"
            src={beyangLogo}
          />
        </Typography>
      </Box>
    </Container>
  );
};

export default SignUp;
