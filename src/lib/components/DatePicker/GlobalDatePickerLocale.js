import React from 'react';
import LocalizedDatePickerContext from './LocalizedDatePickerContext';

const GlobalDatePickerLocale = ({ children, locale = 'en' }) => (
  <LocalizedDatePickerContext.Provider value={locale}>
    {children}
  </LocalizedDatePickerContext.Provider>
);

export default GlobalDatePickerLocale;
