import { Pane, Text } from "evergreen-ui";

function Home() {
  return (
    <div
      className="container"
    >
      {/* <Pane display="flex" alignItems="center" justifyContent="center">
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
      </Pane> */}
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={"100vw"}
        height={"100vh"}
      >
        <Text size={800}>Coming Soon!</Text>
      </Pane>
    </div>
  );
}

export default Home;
