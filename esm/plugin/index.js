import { t, ChartMetadata, ChartPlugin } from '@superset-ui/core';
import buildQuery from './buildQuery';
import controlPanel from './controlPanel';
import thumbnail from '../images/thumbnail.png';
import transformProps from './transformProps';
var metadata = new ChartMetadata({
  description: 'Используйте таблицы, чтобы продемонстрировать представление базовых данных, показать агрегированные показатели или для суммирования набора данных путем группировки нескольких статистических данных по двум осям.',
  name: t('PaulZ Table'),
  thumbnail
});
export default class PaulzTable extends ChartPlugin {
  constructor() {
    super({
      buildQuery,
      controlPanel,
      loadChart: () => import('../PaulzTable'),
      metadata,
      transformProps
    });
  }
}