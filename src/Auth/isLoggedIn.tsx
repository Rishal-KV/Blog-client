import React from 'react';
import { Navigate } from 'react-router-dom';

const isLoggedIn = <P extends object>(WrappedComponent: React.ComponentType): React.FC<P> => {
  return () => {
    const token = localStorage.getItem('userToken');

    if (!token) {
        
      return <Navigate to='/login'/>
    }

    return <WrappedComponent  />;
  };
};

export default isLoggedIn;
