import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const aggregateFunction: ControlSetItem = {
  name: 'aggregateFunction',
  config: {
    type: 'SelectControl',
    label: t('Функция агрегирования'),
    clearable: false,
    choices: [
      ['Count', t('Подсчет')],
      ['Count Unique Values', t('Подсчет уникальных значений')],
      ['List Unique Values', t('Получение списка уникальных значений')],
      ['Sum', t('Сумма')],
      ['Average', t('Средний')],
      ['Median', t('Медиана')],
      ['Sample Variance', t('Выборочная дисперсия')],
      ['Sample Standard Deviation', t('Пример стандартного отклонения')],
      ['Minimum', t('Минимум')],
      ['Maximum', t('Максимум')],
      ['First', t('Первый')],
      ['Last', t('Последний')],
      ['Sum as Fraction of Total', t('Сумма как часть общего числа')],
      ['Sum as Fraction of Rows', t('Сумма как доля строк')],
      ['Sum as Fraction of Columns', t('Сумма как доля столбцов')],
      ['Count as Fraction of Total', t('Считать частью общего числа')],
      ['Count as Fraction of Rows', t('Считать как долю строк')],
      ['Count as Fraction of Columns', t('Считать как доля столбцов')],
    ],
    default: 'Sum',
    description: t(
      'Агрегатная функция, применяемая при повороте и вычислении общего количества строк и столбцов.',
    ),
    renderTrigger: true,
  },
};
