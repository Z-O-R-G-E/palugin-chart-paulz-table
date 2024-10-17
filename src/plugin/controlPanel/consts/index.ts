import { formatSelectOptions } from '@superset-ui/chart-controls';
import {
  t,
  Locale,
  addLocaleData,
  smartDateFormatter,
  NumberFormats,
  getNumberFormatter,
} from '@superset-ui/core';
import { QueryMode, TableType } from '../../../consts';

const en = {
  'Query Mode': [''],
  Aggregate: [''],
  'Raw Records': [''],
  'Emit Filter Events': [''],
  'Show Cell Bars': [''],
  'page_size.show': ['Показать'],
  'page_size.all': ['Все'],
  'page_size.entries': ['Вхождение'],
  'table.previous_page': ['Предыдущий'],
  'table.next_page': ['Следующий'],
  'search.num_records': ['%s запись', '%s записи...'],
};

export const translations: Partial<Record<Locale, typeof en>> = {
  en,
  fr: {
    'Query Mode': [''],
    Aggregate: [''],
    'Raw Records': [''],
    'Emit Filter Events': [''],
    'Show Cell Bars': [''],
    'page_size.show': ['Afficher'],
    'page_size.all': ['tous'],
    'page_size.entries': ['entrées'],
    'table.previous_page': ['Précédent'],
    'table.next_page': ['Suivante'],
    'search.num_records': ['%s enregistrement', '%s enregistrements...'],
  },
  zh: {
    'Query Mode': ['查询模式'],
    Aggregate: ['分组聚合'],
    'Raw Records': ['原始数据'],
    'Emit Filter Events': ['关联看板过滤器'],
    'Show Cell Bars': ['为指标添加条状图背景'],
    'page_size.show': ['每页显示'],
    'page_size.all': ['全部'],
    'page_size.entries': ['条'],
    'table.previous_page': ['上一页'],
    'table.next_page': ['下一页'],
    'search.num_records': ['%s条记录...'],
  },
};

addLocaleData(translations);

export const TableTypeLabel = {
  [TableType.straight]: t('Прямая'),
  [TableType.pivot]: t('Сводная'),
};

export const QueryModeLabel = {
  [QueryMode.aggregate]: t('Агрегация'),
  [QueryMode.raw]: t('Сырые записи'),
};

export const PAGE_SIZE_OPTIONS = formatSelectOptions<number>([
  [0, t('page_size.all')],
  10,
  20,
  50,
  100,
  200,
]);

export const D3_TIME_FORMAT_OPTIONS: [string, string][] = [
  [smartDateFormatter.id, t('Адаптивное форматирование')],
  ['%d/%m/%Y', '%d/%m/%Y | 14/01/2019'],
  ['%m/%d/%Y', '%m/%d/%Y | 01/14/2019'],
  ['%Y-%m-%d', '%Y-%m-%d | 2019-01-14'],
  ['%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M:%S | 2019-01-14 01:32:10'],
  ['%d-%m-%Y %H:%M:%S', '%d-%m-%Y %H:%M:%S | 14-01-2019 01:32:10'],
  ['%H:%M:%S', '%H:%M:%S | 01:32:10'],
];

const d3Formatted: [string, string][] = [
  ',d',
  '.1s',
  '.3s',
  ',.1%',
  '.2%',
  '.3%',
  '.4r',
  ',.1f',
  ',.2f',
  ',.3f',
  '+,',
  '$,.2f',
].map(fmt => [fmt, `${fmt} (${getNumberFormatter(fmt).preview()})`]);

export const D3_FORMAT_OPTIONS: [string, string][] = [
  [NumberFormats.SMART_NUMBER, t('Адаптивное форматирование')],
  ['~g', t('Исходное значение')],
  ...d3Formatted,
  ['DURATION', t('Продолжительность в мс (66000 => 1m 6s)')],
  ['DURATION_SUB', t('Продолжительность в мс (1.40008 => 1ms 400µs 80ns)')],
];

export const DEFAULT_NUMBER_FORMAT = D3_FORMAT_OPTIONS[0][0];
export const DEFAULT_TIME_FORMAT = D3_TIME_FORMAT_OPTIONS[0][0];
