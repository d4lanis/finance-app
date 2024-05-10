import {
  Pane,
  Button,
  TextInput,
  FormField,
  InlineAlert,
  toaster,
  Heading,
  Link,
  Text,
} from "evergreen-ui";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
    isValid,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("This field is required").email(),
      password: Yup.string().required("This field is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form submitted:", values);
      setSubmitting(false);
      toaster.success("Login succcesful");
    },
    validateOnMount: true,
  });

  return (
    <Pane
      background="tint2"
      minHeight="100vh"
      minWidth="100vw"
      overflow="hidden"
      display="flex"
      margin={-10} // Set margin to 0 to remove any default margin
      padding={-10} // Set padding to 0 to remove any default padding
      position="fixed" // Fixed position to ensure the element stays fixed on the viewport
    >
      <Pane width={475} margin="auto" padding={40} backgroundColor="#fff">
        <form onSubmit={handleSubmit}>
          <Heading size={900} paddingBottom={24}>
            Login
          </Heading>

          <FormField label="Email Address" labelFor="email">
            <TextInput
              id="email"
              width="100%"
              height={40}
              marginBottom={24}
              padding={10}
              border="1px solid #ccc"
              borderRadius={5}
              fontSize={16}
              placeholder="Enter your email"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
              isInvalid={Boolean(touched.email && errors.email)}
            />
          </FormField>

          {touched.email && errors.email && (
            <InlineAlert marginTop={-16} marginBottom={16} intent="danger">
              {errors.email}
            </InlineAlert>
          )}

          <FormField label="Password">
            <TextInput
              id="password"
              type="password"
              width="100%"
              height={40}
              marginBottom={24}
              padding={10}
              border="1px solid #ccc"
              borderRadius={5}
              fontSize={16}
              placeholder="Enter your password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              isInvalid={Boolean(touched.password && errors.password)}
            />
            {touched.password && errors.password && (
              <InlineAlert marginTop={-16} marginBottom={16} intent="danger">
                {errors.password}
              </InlineAlert>
            )}
          </FormField>

          <Button
            width="100%"
            height={40}
            fontSize={16}
            appearance="primary"
            type="submit"
            disabled={!isValid}
          >
            Login
          </Button>
        </form>
        <Pane display="flex" flexDirection="column" alignItems="center" justifyContent="center" paddingTop={16} rowGap={8}>
          <Text>
            <Link href="/forgot-password">Forgot Password?</Link>
          </Text>
          <Text>
            Don't have an account? <Link href="/register">Register</Link>
          </Text>
        </Pane>
      </Pane>
    </Pane>
  );
}

export default Login;
