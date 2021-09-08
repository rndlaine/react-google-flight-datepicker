GlobalDatePickerLocale examples:

###### GlobalDatePickerLocale

```js
import { RangeDatePicker, LocalizedDatePicker, GlobalDatePickerLocale } from 'react-google-flight-datepicker';

<div className="react-google-flight-datepicker">
  <div className="date-picker-demo">
  <GlobalDatePickerLocale locale="fr">
    <RangeDatePicker
      startDate={new Date('2020-04-20')}
      endDate={new Date('2020-05-25')}
      dateFormat="DD MMMM YYYY"
      monthFormat="MMMM YYYY"
    />
  </GlobalDatePickerLocale>
  </div>
</div>
```
