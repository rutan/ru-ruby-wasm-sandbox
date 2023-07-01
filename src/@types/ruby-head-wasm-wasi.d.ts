module 'ruby-head-wasm-wasi/dist/browser.esm.js' {
  export declare const DefaultRubyVM: (
    rubyModule: WebAssembly.Module,
    options?: {
      consolePrint: boolean;
    }
  ) => Promise<{
    vm: import('ruby-head-wasm-wasi').RubyVM;
    wasi: import('@wasmer/wasi').WASI;
    instance: WebAssembly.Instance;
  }>;
}
