import { ControlSetItem } from '@superset-ui/chart-controls';
import { t } from '@superset-ui/core';

export const aggregateFunction: ControlSetItem = {
  name: 'aggregate_function',
  config: {
    type: 'SelectControl',
    label: t('Aggregation function'),
    clearable: false,
    choices: [
      ['Count', t('Count')],
      ['Count Unique Values', t('Count Unique Values')],
      ['List Unique Values', t('List Unique Values')],
      ['Sum', t('Sum')],
      ['Average', t('Average')],
      ['Median', t('Median')],
      ['Sample Variance', t('Sample Variance')],
      ['Sample Standard Deviation', t('Sample Standard Deviation')],
      ['Minimum', t('Minimum')],
      ['Maximum', t('Maximum')],
      ['First', t('First')],
      ['Last', t('Last')],
      ['Sum as Fraction of Total', t('Sum as Fraction of Total')],
      ['Sum as Fraction of Rows', t('Sum as Fraction of Rows')],
      ['Sum as Fraction of Columns', t('Sum as Fraction of Columns')],
      ['Count as Fraction of Total', t('Count as Fraction of Total')],
      ['Count as Fraction of Rows', t('Count as Fraction of Rows')],
      ['Count as Fraction of Columns', t('Count as Fraction of Columns')],
    ],
    default: 'Sum',
    description: t(
      'Aggregate function to apply when pivoting and computing the total rows and columns',
    ),
    renderTrigger: true,
  },
};
