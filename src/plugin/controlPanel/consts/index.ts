import { formatSelectOptions } from '@superset-ui/chart-controls';
import { t, Locale, addLocaleData } from '@superset-ui/core';
import { QueryMode, TableType } from '../../../consts';

const en = {
  'Query Mode': [''],
  Aggregate: [''],
  'Raw Records': [''],
  'Emit Filter Events': [''],
  'Show Cell Bars': [''],
  'page_size.show': ['Show'],
  'page_size.all': ['All'],
  'page_size.entries': ['entries'],
  'table.previous_page': ['Previous'],
  'table.next_page': ['Next'],
  'search.num_records': ['%s record', '%s records...'],
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
  [QueryMode.aggregate]: t('Агрегированные'),
  [QueryMode.raw]: t('Необработанные'),
};

export const PAGE_SIZE_OPTIONS = formatSelectOptions<number>([
  [0, t('page_size.all')],
  10,
  20,
  50,
  100,
  200,
]);
