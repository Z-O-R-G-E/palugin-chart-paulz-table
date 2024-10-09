import { ControlSetItem } from '@superset-ui/chart-controls';
import { ChartDataResponseResult, t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const columnConfig: ControlSetItem = {
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
      return {
        queryResponse: chart?.queriesResponse?.[0] as
          | ChartDataResponseResult
          | undefined,
      };
    },
  },
};
