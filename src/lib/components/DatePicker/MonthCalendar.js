import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import dayjs from 'dayjs';

import Week from './Week';
import { getMonthInfo, getWeekDay } from '../../helpers';
import LocalizedDatePicker from './LocalizedDatePicker';

const MonthCalendar = ({
  hidden,
  month,
  year,
  onSelectDate,
  onHoverDate,
  fromDate,
  toDate,
  hoverDate,
  isAnimating,
  startWeekDay,
  minDate,
  maxDate,
  monthFormat,
  weekDayFormat,
  isSingle,
  highlightToday,
  singleCalendar,
}) => {
  function generateWeek() {
    const { totalWeek, totalDay } = getMonthInfo(year, month, startWeekDay);

    return totalWeek.map((week, index) => (
      <Week
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        week={week}
        month={month}
        year={year}
        isFirst={index === 0}
        onSelectDate={onSelectDate}
        onHoverDate={onHoverDate}
        fromDate={fromDate}
        toDate={toDate}
        hoverDate={hoverDate}
        totalDay={totalDay}
        minDate={minDate}
        maxDate={maxDate}
        isSingle={isSingle}
        weekIndex={index}
        highlightToday={highlightToday}
      />
    ));
  }

  function generateWeekDay() {
    const arrWeekDay = getWeekDay(startWeekDay, weekDayFormat);

    return arrWeekDay.map((day, index) => (
      <div className="weekday" key={index}>
        {day}
      </div>
    ));
  }

  return (
    <LocalizedDatePicker>
      <div
        className={cx('month-calendar', {
          isAnimating,
          hidden,
          single: singleCalendar,
        })}
        data-month-index={month + 1}
      >
        <div className="month-name">
          {monthFormat
            ? dayjs(`${year}-${month + 1}-1`).format(monthFormat)
            : dayjs(`${year}-${month + 1}-1`).format('MMMM - YYYY')}
        </div>
        <div className="weekdays">{generateWeekDay()}</div>
        <div className="week-container">
          {generateWeek()}
        </div>

      </div>
    </LocalizedDatePicker>
  );
};

MonthCalendar.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  onSelectDate: PropTypes.func,
  onHoverDate: PropTypes.func,
  fromDate: PropTypes.instanceOf(Date),
  toDate: PropTypes.instanceOf(Date),
  hoverDate: PropTypes.instanceOf(Date),
  hidden: PropTypes.bool,
  isAnimating: PropTypes.bool,
  startWeekDay: PropTypes.string,
  minDate: PropTypes.instanceOf(Date),
  maxDate: PropTypes.instanceOf(Date),
  monthFormat: PropTypes.string,
  isSingle: PropTypes.bool,
  highlightToday: PropTypes.bool,
  singleCalendar: PropTypes.bool,
};

MonthCalendar.defaultProps = {
  month: null,
  year: null,
  onSelectDate: () => {},
  onHoverDate: () => {},
  fromDate: null,
  toDate: null,
  hoverDate: null,
  hidden: false,
  isAnimating: false,
  startWeekDay: null,
  minDate: null,
  maxDate: null,
  monthFormat: '',
  isSingle: false,
  highlightToday: false,
};

export default MonthCalendar;
