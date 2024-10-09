import { t } from '@superset-ui/core';
import { isAggMode, isPivotType, isStraightType } from '../../../../utils';
export var orderDesc = {
  name: 'order_desc',
  config: {
    type: 'CheckboxControl',
    label: t('Sort descending'),
    default: true,
    description: t('Whether to sort descending or ascending'),
    visibility: _ref => {
      var {
        controls
      } = _ref;
      return isAggMode({
        controls
      }) && isStraightType({
        controls
      }) || isPivotType({
        controls
      });
    },
    resetOnHide: false
  }
};