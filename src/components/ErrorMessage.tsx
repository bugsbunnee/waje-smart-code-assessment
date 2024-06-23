import React from 'react';

const ErrorMessage: React.FC<React.PropsWithChildren> = ({ children }) => {
    if (!children) return null;

    return ( 
        <p role="alert" className="text-red-700 text-sm text-left mt-3 font-monteserrat">{children}</p>
     );
};
 
export default ErrorMessage;