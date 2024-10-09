import { ControlSetItem, Dataset } from '@superset-ui/chart-controls';
import { GenericDataType, t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';

export const conditionalFormatting: ControlSetItem = {
  name: 'conditional_formatting',
  config: {
    type: 'ConditionalFormattingControl',
    visibility: isStraightType,
    renderTrigger: true,
    label: t('Conditional formatting'),
    description: t('Apply conditional color formatting to numeric columns'),
    shouldMapStateToProps() {
      return true;
    },
    mapStateToProps(explore, _, chart) {
      const verboseMap = explore?.datasource?.hasOwnProperty('verbose_map')
        ? (explore?.datasource as Dataset)?.verbose_map
        : explore?.datasource?.columns ?? {};
      const chartStatus = chart?.chartStatus;
      const { colnames, coltypes } = chart?.queriesResponse?.[0] ?? {};
      const numericColumns =
        Array.isArray(colnames) && Array.isArray(coltypes)
          ? colnames
              .filter(
                (colname: string, index: number) =>
                  coltypes[index] === GenericDataType.Numeric,
              )
              .map(colname => ({
                value: colname,
                label: verboseMap[colname] ?? colname,
              }))
          : [];
      return {
        removeIrrelevantConditions: chartStatus === 'success',
        columnOptions: numericColumns,
        verboseMap,
      };
    },
  },
};
