import { Heading, Link, Pane, Text } from "evergreen-ui";

function Dashboard() {
  return (
    <div style={{
        height: '100%',
        width: '100%',
    }}>
      <Pane display="flex" alignItems="center" justifyContent="center">
        <Pane flex={1} alignItems="center" display="flex">
          <Heading size={600}>NTECH</Heading>
        </Pane>
        <Pane display="flex" padding={16}>
          <Text marginRight={8}>Inicio</Text>
          <Text marginRight={8}>Servicios</Text>
          <Text marginRight={8}>Nosotros</Text>
          <Text marginRight={8}>Contacto</Text>
          <Link href="auth/login" textDecoration="none">
            Login
          </Link>
        </Pane>
      </Pane>
      <Pane>
      </Pane>
    </div>
  );
}

export default Dashboard;
