import rubyWasm from 'ruby-head-wasm-wasi/dist/ruby+stdlib.wasm?url';
import { DefaultRubyVM } from 'ruby-head-wasm-wasi/dist/browser.esm.js';
import { rubyCode } from './ruby';
import './style.css';

(async () => {
  const response = await fetch(rubyWasm);
  const buffer = await response.arrayBuffer();
  const module = await WebAssembly.compile(buffer);

  const { vm } = await DefaultRubyVM(module);

  vm.printVersion();
  await vm.evalAsync(rubyCode);
})();
