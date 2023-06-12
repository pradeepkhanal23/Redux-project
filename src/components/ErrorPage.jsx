import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <div
        id="error-page"
        className="flex flex-col items-center justify-center w-full h-screen p-3 text-lg"
      >
        <h1 className="font-bold">Oops!</h1>

        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </>
  );
};
export default ErrorPage;
