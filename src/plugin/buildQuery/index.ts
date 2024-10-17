import { BuildQuery } from '@superset-ui/core/src/chart/registries/ChartBuildQueryRegistrySingleton';

import { PaulzTableFormData } from '../../types';
import {
  getPivotBuildQueryContext,
  getStraightBuildQueryContext,
} from './buildQueryContext';
import { QueryContext } from '@superset-ui/core';
import { getTableType } from '../../utils';
import { TableType } from '../../consts';

const buildQuery: BuildQuery = (formData: PaulzTableFormData, options) => {
  const tableType = getTableType(formData);
  console.log('BuildQuery', formData);
  if (tableType === TableType.straight) {
    return getStraightBuildQueryContext(formData, options);
  }
  if (tableType === TableType.pivot) {
    return getPivotBuildQueryContext(formData, options);
  }
  return {} as QueryContext;
};

export const cachedBuildQuery = (): BuildQuery<PaulzTableFormData> => {
  let cachedChanges: any = {};
  const setCachedChanges = (newChanges: any) => {
    cachedChanges = { ...cachedChanges, ...newChanges };
  };

  return (formData, options) =>
    buildQuery(
      { ...formData },
      {
        extras: { cachedChanges },
        ownState: options?.ownState ?? {},
        hooks: {
          ...options?.hooks,
          setDataMask: () => {},
          setCachedChanges,
        },
      },
    );
};

export default cachedBuildQuery();
