import { t } from '@superset-ui/core';
import { PAGE_SIZE_OPTIONS } from '../../../../consts';
import { isStraightType } from '../../../../utils';
export var pageLength = {
  name: 'page_length',
  config: {
    type: 'SelectControl',
    freeForm: true,
    renderTrigger: true,
    label: t('Page length'),
    default: null,
    choices: PAGE_SIZE_OPTIONS,
    description: t('Rows per page, 0 means no pagination'),
    visibility: _ref => {
      var _controls$server_pagi;
      var {
        controls
      } = _ref;
      return !(controls != null && (_controls$server_pagi = controls.server_pagination) != null && _controls$server_pagi.value) && isStraightType({
        controls
      });
    }
  }
};