import { RubyVM } from 'ruby-head-wasm-wasi';

export class RubyManager {
  private _vm: RubyVM;
  private readonly _code: string[] = [];

  constructor(vm: RubyVM) {
    this._vm = vm;
  }

  push(code: string) {
    this._code.push(code);
  }

  hasCode() {
    return this._code.length;
  }

  evalAsyncCode() {
    const code = this._code.shift();
    if (!code) return Promise.resolve();

    return this._vm.evalAsync(code);
  }
}
