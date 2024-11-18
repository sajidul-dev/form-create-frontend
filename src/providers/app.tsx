import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProviderProps } from "../types/app";
import { Spinner } from "../components/Elements/Spinner/Spinner";

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            {import.meta.env.NODE_ENV !== "test" && <ReactQueryDevtools />}
            <ToastContainer
              position="top-right"
              autoClose={1500}
              hideProgressBar={true}
              transition={Slide}
              closeButton={true}
            />
            <AuthLoader
              renderLoading={() => (
                <div className="w-screen h-screen flex justify-center items-center">
                  <Spinner size="xl" />
                </div>
              )}
            > */}
      <Router>
        {children}
        {/* <SessionTimeoutModal />
                <SessionExpiredModal /> */}
      </Router>
      {/* </AuthLoader>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary> */}
    </React.Suspense>
  );
};
