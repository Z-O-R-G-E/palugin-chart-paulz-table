import { t } from '@superset-ui/core';
import { tableType } from '../../controls';
export var tableTypeSection = {
  label: t('Таблица'),
  expanded: true,
  controlSetRows: [[tableType]]
};