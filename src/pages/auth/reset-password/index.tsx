import {
    Pane,
    Button,
    TextInput,
    FormField,
    InlineAlert,
    toaster,
    Heading
  } from "evergreen-ui";
  import { useFormik } from "formik";
  import * as Yup from "yup";
  import { useNavigate } from "react-router-dom";
  
  function ResetPassword() {
    const navigate = useNavigate();
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
        password: "",
        resetPassword: "",

      },
      validationSchema: Yup.object({
        password: Yup.string().required("This field is required"),
        resetPassword: Yup.string().required("This field is required")
      }),
      onSubmit: (values, { setSubmitting }) => {
        console.log("Form submitted:", values);
        setSubmitting(false);
        toaster.success("Password Reseted!");
        setTimeout(() => {
            navigate('/login');
        }, 3000)
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
              Reset Password
            </Heading>
  
            <FormField label="Password" labelFor="password">
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
            </FormField>
  
            {touched.password && errors.password && (
              <InlineAlert marginTop={-16} marginBottom={16} intent="danger">
                {errors.password}
              </InlineAlert>
            )}
  
            <FormField label="Password">
              <TextInput
                id="resetPassword"
                type="password"
                width="100%"
                height={40}
                marginBottom={24}
                padding={10}
                border="1px solid #ccc"
                borderRadius={5}
                fontSize={16}
                placeholder="Confirm your password"
                value={values.resetPassword}
                onBlur={handleBlur}
                onChange={handleChange}
                isInvalid={Boolean(touched.resetPassword && errors.resetPassword)}
              />
              {touched.resetPassword && errors.resetPassword && (
                <InlineAlert marginTop={-16} marginBottom={16} intent="danger">
                  {errors.resetPassword}
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
              Confirm
            </Button>
          </form>
        </Pane>
      </Pane>
    );
  }
  
  export default ResetPassword;
  