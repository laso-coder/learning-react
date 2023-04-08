import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

function AuthenticationPage() {
  console.log("AuthenticationPage");
  return <AuthForm />;
}

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  console.log("mode is %o", mode);

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const apiPath = "http://localhost:8080/" + mode;

  const response = await fetch(apiPath, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  // soon: manage that token
  const resData = await response.json();
  const token = resData.token;

  let expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  let expTime = new Date(expiration.toISOString());

  localStorage.setItem("token", token);
  localStorage.setItem("user", data.get("email"));
  localStorage.setItem("expiration", expTime.toLocaleString("en-GB"));

  return redirect("/");
}
