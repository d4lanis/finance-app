import { Pane, Text } from "evergreen-ui";

function NotFound() {
  return (
    <div
      style={{
        overflow: "hidden",
      }}
    >
      <Pane
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={"100vw"}
        height={"100vh"}
      >
        <Text size={800}>404 - Page Not Found</Text>
      </Pane>
    </div>
  );
}

export default NotFound;
