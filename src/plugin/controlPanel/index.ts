import {
  ControlPanelConfig,
  getStandardizedControls,
} from '@superset-ui/chart-controls';
import { customizeSection, querySection, tableTypeSection } from './sections';

const config: ControlPanelConfig = {
  controlPanelSections: [tableTypeSection, querySection, customizeSection],
  formDataOverrides: formData => ({
    ...formData,
    metrics: getStandardizedControls().popAllMetrics(),
    groupby: getStandardizedControls().popAllColumns(),
  }),
};

export default config;
