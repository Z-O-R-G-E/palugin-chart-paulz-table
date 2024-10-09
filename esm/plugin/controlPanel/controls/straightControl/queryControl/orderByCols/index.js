import { t } from '@superset-ui/core';
import { isRawMode, isStraightType } from '../../../../utils';
export var orderByCols = {
  name: 'order_by_cols',
  config: {
    type: 'SelectControl',
    label: t('Ordering'),
    description: t('Order results by selected columns'),
    multi: true,
    default: [],
    mapStateToProps: _ref => {
      var {
        datasource
      } = _ref;
      return {
        choices: datasource != null && datasource.hasOwnProperty('order_by_choices') ? datasource == null ? void 0 : datasource.order_by_choices : (datasource == null ? void 0 : datasource.columns) || []
      };
    },
    visibility: _ref2 => {
      var {
        controls
      } = _ref2;
      return isRawMode({
        controls
      }) && isStraightType({
        controls
      });
    },
    resetOnHide: false
  }
};