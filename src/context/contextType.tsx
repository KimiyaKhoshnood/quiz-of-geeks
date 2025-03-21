export type resultContext = {id:string, result:('wrong'|'correct'|'timeout')[]}

export type TContextProvider = {
  result: resultContext[];
  handleResult: (result: resultContext) => void;
};