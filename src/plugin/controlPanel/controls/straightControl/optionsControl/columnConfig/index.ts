import { ControlSetItem } from '@superset-ui/chart-controls';
import { ChartDataResponseResult, t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const columnConfig: ControlSetItem = {
  name: 'columnConfig',
  config: {
    type: 'ColumnConfigControl',
    label: t('Настройка столбцов'),
    description: t('Дальнейшая настройка отображения каждого столбца.'),
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
