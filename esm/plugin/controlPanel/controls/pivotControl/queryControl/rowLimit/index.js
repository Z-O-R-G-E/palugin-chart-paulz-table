function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import { sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';
export var rowLimit = {
  name: 'row_limit',
  config: _extends({}, sharedControls.row_limit, {
    label: t('Cell limit'),
    description: t('Limits the number of cells that get retrieved.')
  })
};