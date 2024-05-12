import {
  Pane,
  Button,
  TextInput,
  FormField,
  InlineAlert,
  toaster,
  Heading,
  Text,
  Link
} from "evergreen-ui";
import { useFormik } from "formik";
import * as Yup from "yup";

function Register() {
  const {
    errors,
    touched,
    handleBlur,
    handleChange,
    values,
    isValid,
    handleSubmit,
    dirty
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("This field is required"),
      lastname: Yup.string().required("This field is required"),
      email: Yup.string().required("This field is required").email(),
      phone: Yup.string().required("This field is required"),
      password: Yup.string().required("This field is required"),
      confirmPassword: Yup.string().required("This field is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log("Form submitted:", values);
      setSubmitting(false);
      toaster.success("Registration succcesful");
    },
    //validateOnMount: true,
  });

  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      minWidth="100%"
      position="fixed"
      margin={-10}
      padding={-10}
      background="tint2"
    >
      <Pane padding={24} background="#fff">
        <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
          <Heading size={900} paddingBottom={24}>
            Register
          </Heading>
          <Pane display="flex" flexDirection="row" columnGap={16}>
            <Pane display="flex" flexDirection="column">
              <FormField label="First Name" labelFor="firstname">
                <TextInput
                  id="firstname"
                  minWidth="100%"
                  height={40}
                  marginBottom={24}
                  padding={10}
                  border="1px solid #ccc"
                  borderRadius={5}
                  fontSize={16}
                  placeholder="Enter your first name"
                  value={values.firstname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={Boolean(touched.firstname && errors.firstname)}
                />
                {touched.firstname && errors.firstname && (
                  <InlineAlert
                    marginTop={-16}
                    marginBottom={16}
                    intent="danger"
                  >
                    {errors.firstname}
                  </InlineAlert>
                )}
              </FormField>
              <FormField label="Last Name" labelFor="lastname">
                <TextInput
                  id="lastname"
                  minWidth="100%"
                  height={40}
                  marginBottom={24}
                  padding={10}
                  border="1px solid #ccc"
                  borderRadius={5}
                  fontSize={16}
                  placeholder="Enter your last name"
                  value={values.lastname}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={Boolean(touched.lastname && errors.lastname)}
                />
                {touched.lastname && errors.lastname && (
                  <InlineAlert
                    marginTop={-16}
                    marginBottom={16}
                    intent="danger"
                  >
                    {errors.lastname}
                  </InlineAlert>
                )}
              </FormField>
              <FormField label="Phone" labelFor="phone">
                <TextInput
                  id="phone"
                  minWidth="100%"
                  height={40}
                  marginBottom={24}
                  padding={10}
                  border="1px solid #ccc"
                  borderRadius={5}
                  fontSize={16}
                  placeholder="Enter your phone number"
                  value={values.phone}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={Boolean(touched.phone && errors.phone)}
                />
                {touched.phone && errors.phone && (
                  <InlineAlert
                    marginTop={-16}
                    marginBottom={16}
                    intent="danger"
                  >
                    {errors.phone}
                  </InlineAlert>
                )}
              </FormField>
            </Pane>
            <Pane display="flex" flexDirection="column">
              <FormField label="Email Address" labelFor="email">
                <TextInput
                  id="email"
                  minWidth="100%"
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
                {touched.email && errors.email && (
                  <InlineAlert
                    marginTop={-16}
                    marginBottom={16}
                    intent="danger"
                  >
                    {errors.email}
                  </InlineAlert>
                )}
              </FormField>
              <FormField label="Password" labelFor="password">
                <Pane>
                  <TextInput
                    id="password"
                    minWidth="100%"
                    height={40}
                    marginBottom={24}
                    padding={10}
                    border="1px solid #ccc"
                    borderRadius={5}
                    fontSize={16}
                    placeholder="Enter your password"
                    type="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    isInvalid={Boolean(touched.password && errors.password)}
                  />
                </Pane>
                {touched.email && errors.password && (
                  <InlineAlert
                    marginTop={-16}
                    marginBottom={16}
                    intent="danger"
                  >
                    {errors.password}
                  </InlineAlert>
                )}
              </FormField>
              <FormField label="Confirm Password" labelFor="confirmPassword">
                <TextInput
                  id="confirmPassword"
                  minWidth="100%"
                  height={40}
                  marginBottom={24}
                  padding={10}
                  border="1px solid #ccc"
                  borderRadius={5}
                  fontSize={16}
                  placeholder="Confirm your password"
                  type="password"
                  value={values.confirmPassword}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  isInvalid={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <InlineAlert
                    marginTop={-16}
                    marginBottom={16}
                    intent="danger"
                  >
                    {errors.confirmPassword}
                  </InlineAlert>
                )}
              </FormField>
            </Pane>
          </Pane>
          <Button
            width="100%"
            height={40}
            fontSize={16}
            appearance="primary"
            type="submit"
            disabled={!isValid || !dirty}
          >
            Register
          </Button>
          <Pane display="flex" justifyContent="center" paddingTop={16}>
            <Text>
              Already have an account? <Link href="auth/login">Login</Link>
            </Text>
          </Pane>
        </form>
      </Pane>
    </Pane>
  );
}

export default Register;
