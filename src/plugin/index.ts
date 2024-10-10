import { t, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import thumbnail from '../images/paulz-thumbnail.png';
import transformProps from './transformProps';
import { PaulzTableFormData, PaulzTableProps } from '../types';

const metadata = new ChartMetadata({
  description:
    'Используйте таблицы, чтобы продемонстрировать представление базовых данных, показать агрегированные показатели или для суммирования набора данных путем группировки нескольких статистических данных по двум осям.',
  name: t('PaulZ Table'),
  thumbnail,
});

export default class PaulzTable extends ChartPlugin<
  PaulzTableFormData,
  PaulzTableProps
> {
  constructor() {
    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('../PaulzTable'),
      metadata,
      transformProps,
    });
  }
}
