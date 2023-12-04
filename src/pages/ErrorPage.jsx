import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured.";
  let message = "Something went wrong";
  let status = 404;

  if (error.status === 403) {
    status = 403;
    message = error.message;
  }

  <div>
    <h1>Error {status}</h1>
    <h3>{title}</h3>
    <p>{message}</p>
  </div>;
}
