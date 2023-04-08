import {
  Form,
  useSearchParams,
  useActionData,
  useNavigation,
  Link,
} from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const data = useActionData();
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting = navigation.state === "submitting";

  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Register"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          {/* Template litral notation using here  */}
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Register" : "Login"}
          </Link>
          {/* //! TODO Here context switch not working ...
          <button component={Link} to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Sing Up" : "Login"}
          </button> */}

          <button disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;
