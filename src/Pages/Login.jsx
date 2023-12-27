import { Container } from 'components/Container/Container';
import { LoginForm } from 'components/LoginForm/LoginForm';
import Section from 'components/Section/Section';

const Login = () => {
  return (
    <Container>
      <Section title={'Login'}>
        <LoginForm />
      </Section>
    </Container>
  );
};

export default Login;
