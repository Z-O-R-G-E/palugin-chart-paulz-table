export var updateExternalFormData = function updateExternalFormData(setDataMask, pageNumber, pageSize) {
  if (setDataMask === void 0) {
    setDataMask = () => {};
  }
  return setDataMask({
    ownState: {
      currentPage: pageNumber,
      pageSize
    }
  });
};