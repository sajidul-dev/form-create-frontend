import { useMemo } from "react";
import FromCreate from "../page/FormCreate";
import Report from "../page/Report";
import { useRoutes } from "react-router-dom";
import { Landing } from "../page/Landing";

export const AppRoutes = () => {
  const commonRoutes = useMemo(() => [{ path: "/", element: <Landing /> }], []);
  const routes = useMemo(
    () => [
      {
        path: "/form-create",
        element: <FromCreate />,
      },
      {
        path: "/report",
        element: <Report />,
      },
    ],
    []
  );
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};

AppRoutes.displayName = "AppRoutes";
