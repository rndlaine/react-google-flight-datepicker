import React from 'react';
import LocalizedDatePickerContext from './LocalizedDatePickerContext';

const GlobalLocaleDatePicker = ({ children, locale = 'en' }) => (
  <LocalizedDatePickerContext.Provider value={locale}>
    {children}
  </LocalizedDatePickerContext.Provider>
);

export default GlobalLocaleDatePicker;
