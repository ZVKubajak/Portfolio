import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/components";

type ContactEmailProps = {
  email: string;
  message: string;
};

const ContactEmail = ({ email, message }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio.</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>
                You received the following message from your portfolio:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Reply to the sender at {email}.</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
