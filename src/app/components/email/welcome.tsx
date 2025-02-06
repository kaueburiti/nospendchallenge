import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const NoSpendChallengeWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>You're now ready to make live transactions with Stripe!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Heading style={heading}>#NoSpendChallenge</Heading>
          <Text style={paragraph}>
            Hi 👋
            <br />
            We're thrilled to have you on board and we're excited to introduce
            you to the{" "}
            <Link style={anchor} href="https://nospendchallenge.app">
              #NoSpendChallenge
            </Link>
          </Text>
          <Text style={paragraph}>
            Our mission is simple: To help you take charge of your financial
            health by controlling impulsive buying.
          </Text>
          <Text style={paragraph}>
            Stay tuned for exclusive updates and early access opportunities. We
            invite you to share our{" "}
            <Link style={anchor} href="https://nospendchallenge.app">
              landing page
            </Link>{" "}
            with others - the more, the merrier!
          </Text>

          <Text style={paragraph}>
            Bests,
            <br />
            Débora Buriti
            <br />
          </Text>
          <Text style={signature}>#NoSpendChallenge Founder</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default NoSpendChallengeWelcomeEmail;

const signature = {
  fontSize: "12px",
  color: "#525f7f",
  marginTop: "-20px",
};
const highlight = {
  color: "#EF4444",
};

const heading = {
  color: "#525f7f",
  fontSize: "24px",
  fontWeight: "bold",
};

const main = {
  backgroundColor: "#e6edf5",
  padding: "40px 0",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  borderRadius: "12px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left",
};

const anchor = {
  color: "#EF4444",
};

const button = {
  backgroundColor: "#EF4444",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
