import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
import {isStraightType} from "../../../../utils";

export const serverPagination: ControlSetItem = {
  name: 'server_pagination',
  config: {
    type: 'CheckboxControl',
    label: t('Server pagination'),
    visibility: isStraightType,
    description: t(
      'Enable server side pagination of results (experimental feature)',
    ),
    default: false,
  },
};
