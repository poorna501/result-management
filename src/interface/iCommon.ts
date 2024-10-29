export interface IObj<T = unknown> {
    key: string;
    value: T; // T can be any type, but it's explicitly specified when used
  }

  export interface Marks {
    rollNo: number | null; 
    telugu: number | null;
    hindi: number | null;
    english: number | null;
    mathematics: number | null;
    science: number | null;
    social: number | null;
}