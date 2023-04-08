import React, { useContext } from 'react';
import AppContext from './context/AppContext.jsx';

const UserView = ({ children }) => {
   const { app } = useContext(AppContext);
   const { user } = app;

   return <div> 
        <h1>Hello, { user.displayName }!</h1>
        { children }
    </div>;
};

export default UserView;
