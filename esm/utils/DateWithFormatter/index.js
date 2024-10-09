import { normalizeTimestamp } from '@superset-ui/core';
export default class Index extends Date {
  constructor(input, _temp) {
    var {
      formatter = String
    } = _temp === void 0 ? {} : _temp;
    var value = input;
    if (typeof value === 'string') {
      value = normalizeTimestamp(value);
    }
    super(value);
    this.formatter = void 0;
    this.input = void 0;
    this.input = input;
    this.formatter = formatter;
    this.toString = () => {
      if (this.formatter === String) {
        return String(this.input);
      }
      return this.formatter ? this.formatter(this) : Date.toString.call(this);
    };
  }
}