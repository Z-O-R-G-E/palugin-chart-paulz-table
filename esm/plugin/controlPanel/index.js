function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { getStandardizedControls } from '@superset-ui/chart-controls';
import { customizeSection, querySection, tableTypeSection } from './sections';
var config = {
  controlPanelSections: [tableTypeSection, querySection, customizeSection],
  formDataOverrides: formData => _extends({}, formData, {
    metrics: getStandardizedControls().popAllMetrics(),
    groupby: getStandardizedControls().popAllColumns()
  })
};
export default config;