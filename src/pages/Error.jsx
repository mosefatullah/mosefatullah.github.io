import React from "react";

function Error() {
 React.useEffect(() => {
  window.scrollTo(0, 0);
 }, []);
 return (
  <div className="flex flex-col items-center justify-center h-[90vh] text-4xl text-gray-900 dark:text-gray-100 dark:bg-gray-900">
   <h1 className="font-bold">404</h1>
   <p className="text-2xl mt-3 text-gray-500">Page not found</p>
  </div>
 );
}

export default Error;
