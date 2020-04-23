import React, { useState } from 'react';

const BookApptContext = React.createContext([{}, () => { }]);

const BookApptProvider = ({ children }) => {
    const [state, setState] = useState({});
    return (
        <BookApptContext.Provider value={[state, setState]}>
            {children}
        </BookApptContext.Provider>
    );
};

export { BookApptContext, BookApptProvider };
