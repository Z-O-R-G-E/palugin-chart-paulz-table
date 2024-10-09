import { GenericDataType, t } from '@superset-ui/core';
import { isStraightType } from '../../../../utils';
export var conditionalFormatting = {
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
      var _explore$datasource, _explore$datasource2, _explore$datasource$c, _explore$datasource3, _chart$queriesRespons, _chart$queriesRespons2;
      var verboseMap = explore != null && (_explore$datasource = explore.datasource) != null && _explore$datasource.hasOwnProperty('verbose_map') ? explore == null || (_explore$datasource2 = explore.datasource) == null ? void 0 : _explore$datasource2.verbose_map : (_explore$datasource$c = explore == null || (_explore$datasource3 = explore.datasource) == null ? void 0 : _explore$datasource3.columns) != null ? _explore$datasource$c : {};
      var chartStatus = chart == null ? void 0 : chart.chartStatus;
      var {
        colnames,
        coltypes
      } = (_chart$queriesRespons = chart == null || (_chart$queriesRespons2 = chart.queriesResponse) == null ? void 0 : _chart$queriesRespons2[0]) != null ? _chart$queriesRespons : {};
      var numericColumns = Array.isArray(colnames) && Array.isArray(coltypes) ? colnames.filter((colname, index) => coltypes[index] === GenericDataType.Numeric).map(colname => {
        var _verboseMap$colname;
        return {
          value: colname,
          label: (_verboseMap$colname = verboseMap[colname]) != null ? _verboseMap$colname : colname
        };
      }) : [];
      return {
        removeIrrelevantConditions: chartStatus === 'success',
        columnOptions: numericColumns,
        verboseMap
      };
    }
  }
};