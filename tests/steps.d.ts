/// <reference types='codeceptjs' />

type steps_file = typeof import('./steps_file');
type Backdoor = typeof import('./backdoor');

declare namespace CodeceptJS {
  interface SupportObject {
    I: I;
    backdoor: Backdoor;
  }

  interface Methods extends Playwright, REST, JSONResponse {}

  interface I extends ReturnType<steps_file> {}

  namespace Translation {
    interface Actions {}
  }
}
