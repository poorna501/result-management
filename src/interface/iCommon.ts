export interface IObj<T = unknown> {
    key: string;
    value: T; // T can be any type, but it's explicitly specified when used
  }