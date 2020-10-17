import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);

    this.prepare();
  }

  prepare() {}

  toHTML() {
    return '';
  }

  init() {
    this.initListener();
  }

  destroy() {
    this.removeListener();
  }
}
