import React, { useState } from 'react';

export const BookApptContext = React.createContext([{}, () => { }]);

const BookApptProvider = ({ children }) => {
    const [state, setState] = useState({
        location: '',
        date: '',
        time: '',
        guests: null,
        fullName: '',
        phoneNumber: null,
        email: '',
        weddingDate: '',
        tryon: false,
        gownBudget: '',
        hearAboutUs: '',
        recieveUpdates: false,
        anythingElse: '',
    });
    return (
        <BookApptContext.Provider value={[state, setState]}>
            {children}
        </BookApptContext.Provider>
    );
};

export default ({ element }) => (
    <BookApptProvider>
        {element}
    </BookApptProvider>
);
