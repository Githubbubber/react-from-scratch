import React from "react";
import { AppContextProvider } from './context/AppContext.jsx';
import UserView from './UserView.jsx';

const App = () => {
   return <AppContextProvider>
        <UserView />
    </AppContextProvider>;
};

export default App;
