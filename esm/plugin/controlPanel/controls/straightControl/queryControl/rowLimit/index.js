export var rowLimit = {
  name: 'row_limit',
  override: {
    default: 1000,
    visibility: _ref => {
      var _controls$server_pagi;
      var {
        controls
      } = _ref;
      return !(controls != null && (_controls$server_pagi = controls.server_pagination) != null && _controls$server_pagi.value);
    }
  }
};