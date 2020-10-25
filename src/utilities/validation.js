const isRequired = value => value && value.length > 0;

const isValidEmail = value => {
  const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return re.test(value.toLowerCase());
};

const isError = errors => Object.keys(errors).some(error => errors[error]);

const validateLogin = inputs => ({
  email: !isRequired(inputs.email)
    ? "Email is required"
    : !isValidEmail(inputs.email)
    ? "Email is invalid"
    : null,
  password: !isRequired(inputs.password) ? "Password is required" : null
});

export { isError, validateLogin };
