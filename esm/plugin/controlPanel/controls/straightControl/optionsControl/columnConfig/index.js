import { t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';
export var columnConfig = {
  name: 'column_config',
  config: {
    type: 'ColumnConfigControl',
    label: t('Customize columns'),
    description: t('Further customize how to display each column'),
    width: 400,
    height: 320,
    renderTrigger: true,
    visibility: isStraightType,
    shouldMapStateToProps() {
      return true;
    },
    mapStateToProps(explore, _, chart) {
      var _chart$queriesRespons;
      return {
        queryResponse: chart == null || (_chart$queriesRespons = chart.queriesResponse) == null ? void 0 : _chart$queriesRespons[0]
      };
    }
  }
};