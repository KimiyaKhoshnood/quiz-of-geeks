export type TContextProvider = {
  result: {id:string, result:('wrong'|'correct'|'timeout')[]}[];
  handleResult: (result: {id:string, result:('wrong'|'correct'|'timeout')[]}) => void;
};