import { ControlSetItem, Dataset } from '@superset-ui/chart-controls';
import { QueryFormMetric, t } from '@superset-ui/core';
import { isPivotType } from '../../../../utils';

export const conditionalFormatting: ControlSetItem = {
  name: 'conditionalFormatting',
  config: {
    type: 'ConditionalFormattingControl',
    renderTrigger: true,
    label: t('Условное форматирование'),
    visibility: isPivotType,
    description: t('Применение условного форматирования цвета к метрикам'),
    mapStateToProps(explore, _, chart) {
      const values =
        (explore?.controls?.metrics?.value as QueryFormMetric[]) ?? [];
      const verboseMap = explore?.datasource?.hasOwnProperty('verbose_map')
        ? (explore?.datasource as Dataset)?.verbose_map
        : explore?.datasource?.columns ?? {};
      const chartStatus = chart?.chartStatus;
      const metricColumn = values.map(value => {
        if (typeof value === 'string') {
          return { value, label: verboseMap[value] ?? value };
        }
        return { value: value.label, label: value.label };
      });
      return {
        removeIrrelevantConditions: chartStatus === 'success',
        columnOptions: metricColumn,
        verboseMap,
      };
    },
  },
};
