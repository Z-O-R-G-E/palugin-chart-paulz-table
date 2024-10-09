export const setColumns = (data: []) => {
  return data.map((column: any) => {
    if (column.label) {
      return {
        header: column.label,
        accessorKey: column.label,
      };
    } else {
      return {
        header: column,
        accessorKey: column,
      };
    }
  });
};
