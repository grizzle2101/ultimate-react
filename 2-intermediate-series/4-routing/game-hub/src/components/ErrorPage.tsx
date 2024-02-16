import { Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Heading>Ooops...</Heading>
      <p>
        {isRouteErrorResponse(error)
          ? "Invalid Page"
          : "Sorry, an unexpected error has occurred - " + error}
      </p>
    </>
  );
};

export default ErrorPage;
