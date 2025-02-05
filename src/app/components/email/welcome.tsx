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
          <Hr style={hr} />
          <Text style={paragraph}>
            Thank you for joining the #NoSpendChallenge! Let's stop impulsive
            consumption and save some money 🎉
          </Text>
          <Text style={paragraph}>
            We're excited to have you on our waitlist! In the next few weeks,
            we'll keep you updated on our progress and let you know as soon as
            the app launches.
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>
            If you have a friend that struggles with impulsive consumption,
            please share our community with them, he can also join the{" "}
            <Link style={anchor} href="https://nospendchallenge.app">
              #NoSpendChallenge
            </Link>
            !
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default NoSpendChallengeWelcomeEmail;

const heading = {
  color: "#EF4444",
  fontSize: "24px",
  fontWeight: "bold",
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
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
  textAlign: "left" as const,
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
  textAlign: "center" as const,
  display: "block",
  width: "100%",
  padding: "10px",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
