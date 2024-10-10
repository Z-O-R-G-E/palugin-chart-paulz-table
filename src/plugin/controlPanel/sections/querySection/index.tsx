import { ControlPanelSectionConfig } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const querySection: ControlPanelSectionConfig = {
  label: t('Запрос'),
  expanded: true,
  controlSetRows: [
    /*Straight*/
    /*Pivot*/
    /*General*/
  ],
};
