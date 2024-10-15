import { DataRecord } from '@superset-ui/core';

export const isNumeric = (key: string, data: DataRecord[] = []) => {
  return data.every(
    x => x[key] === null || x[key] === undefined || typeof x[key] === 'number',
  );
};
