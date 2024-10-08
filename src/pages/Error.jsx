import React from "react";
import { Helmet } from "react-helmet";

function Error() {
 React.useEffect(() => {
  window.scrollTo(0, 0);
 }, []);
 return (
  <div className="flex flex-col items-center justify-center h-[90vh] text-4xl text-gray-900 dark:text-gray-100 dark:bg-gray-900">
   <Helmet>
    <title>404 Not Found!</title>
    <meta name="description" content="" data-react-helmet="true" />
    <meta name="keywords" content="" data-react-helmet="true" />
   </Helmet>
   <h1 className="font-bold">404</h1>
   <p className="text-2xl mt-3 text-gray-500">Page not found</p>
  </div>
 );
}

export default Error;
