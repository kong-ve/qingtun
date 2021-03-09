/**
 * Created by Tw93 on 2019-12-07.
 * 抽离高阶日期组件
 */

import React from 'react';
import moment from 'moment';
import { getDateFormat } from '../utils';

export default (p, onChange, DateComponent) => {debugger
  const style = p.invalid ? { borderColor: '#f5222d' } : {};
  let { formatDateType='YYYY-MM-dd' } = p.schema;
  const dateFormat = getDateFormat(formatDateType);
  const format = dateFormat;
  p.schema.format = format;
  let defaultObj = {};
  if (p.value) {
    defaultObj.value = moment(p.value, formatDateType);
  } else {
    defaultObj.value = '';
  }

  const placeholderObj = p.description ? { placeholder: p.description } : {};

  const dateParams = {
    ...placeholderObj,
    ...p.options,
    ...p.class,
    ...defaultObj,
    style: { width: '100%', ...style },
    disabled: p.disabled || p.readonly,
    onChange,
  };

  if (format === 'dateTime' || format === 'dateTimeMin') {
    dateParams.showTime = true;
  }

  return <DateComponent {...dateParams} />;
};
