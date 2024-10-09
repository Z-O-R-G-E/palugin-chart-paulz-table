import { t } from '@superset-ui/core';
import { PAGE_SIZE_OPTIONS } from '../../../../consts';
export var serverPageLength = {
  name: 'server_page_length',
  config: {
    type: 'SelectControl',
    freeForm: true,
    label: t('Server Page Length'),
    default: 10,
    choices: PAGE_SIZE_OPTIONS,
    description: t('Rows per page, 0 means no pagination'),
    visibility: _ref => {
      var _controls$server_pagi;
      var {
        controls
      } = _ref;
      return Boolean(controls == null || (_controls$server_pagi = controls.server_pagination) == null ? void 0 : _controls$server_pagi.value);
    }
  }
};