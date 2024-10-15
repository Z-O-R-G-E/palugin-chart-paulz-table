import { ControlSetItem, sharedControls } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const seriesLimit: ControlSetItem = {
  name: 'seriesLimit',
  config: {
    ...sharedControls.series_limit,
    label: t('Предел серии'),
    description: t(
      'Ограничивает количество отображаемых серий. Объединенный подзапрос (или дополнительный этап, где подзапросы не поддерживаются) применяется для ограничения количества извлекаемых и отображаемых серий. Эта функция полезна при группировке по столбцам с высокой мощностью, однако увеличивает сложность и стоимость запроса.',
    ),
  },
};
