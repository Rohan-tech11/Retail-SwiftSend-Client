import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "An error occured.";
  let message = "Something went wrong.";
  let status = 500;

  // if (error.status === 403) {
  //   title = "Unauthorized.";
  //   message = error.data.message;
  //   status = error.data.status;
  // }
  return (
    <>
      <h1>{title}</h1>
      <h2>{status}</h2>
      <p>{message}</p>
    </>
  );
}
