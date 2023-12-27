import { Container } from 'components/Container/Container';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import Section from 'components/Section/Section';

const Register = () => {
  return (
    <Container>
      <Section title={'Register'}>
        <RegisterForm />
      </Section>
    </Container>
  );
};

export default Register;
