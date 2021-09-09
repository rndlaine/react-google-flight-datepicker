GlobalLocaleDatePicker examples:

###### GlobalLocaleDatePicker

```js
import { RangeDatePicker, LocalizedDatePicker, GlobalLocaleDatePicker } from '@rndlaine/react-google-flight-datepicker';

<div className="react-google-flight-datepicker">
  <div className="date-picker-demo">
  <GlobalLocaleDatePicker locale="fr">
    <RangeDatePicker
      startDate={new Date('2020-04-20')}
      endDate={new Date('2020-05-25')}
      dateFormat="DD MMMM YYYY"
      monthFormat="MMMM YYYY"
    />
  </GlobalLocaleDatePicker>
  </div>
</div>
```
