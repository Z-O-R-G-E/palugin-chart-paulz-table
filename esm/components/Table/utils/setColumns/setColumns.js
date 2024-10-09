export var setColumns = data => {
  return data.map(column => {
    if (column.label) {
      return {
        header: column.label,
        accessorKey: column.label
      };
    } else {
      return {
        header: column,
        accessorKey: column
      };
    }
  });
};