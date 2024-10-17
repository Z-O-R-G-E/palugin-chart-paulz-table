import {
  ControlPanelConfig,
  getStandardizedControls,
} from '@superset-ui/chart-controls';
import {
  pivotOptionsSection,
  pivotQuerySection,
  straightOptionsSection,
  straightQuerySection,
  tableTypeSection,
} from './sections';

const config: ControlPanelConfig = {
  controlPanelSections: [
    tableTypeSection,
    pivotQuerySection,
    pivotOptionsSection,
    straightQuerySection,
    straightOptionsSection,
  ],
  formDataOverrides: formData => ({
    ...formData,
    metrics: getStandardizedControls().popAllMetrics(),
    dimension: getStandardizedControls().popAllColumns(),
  }),
};

export default config;
