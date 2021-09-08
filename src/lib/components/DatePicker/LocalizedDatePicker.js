import React from 'react';
import dayjs from 'dayjs';
import LocalizedDatePickerContext from './LocalizedDatePickerContext';

const localeData = require('dayjs/plugin/localeData');

dayjs.extend(localeData);

const LocalizedDatePicker = ({ children }) => (
  <LocalizedDatePickerContext.Consumer>
    {locale => {
      require(`dayjs/locale/${locale}`);
      dayjs.locale(locale);

      return children;
    }}
  </LocalizedDatePickerContext.Consumer>
);

export default LocalizedDatePicker;
