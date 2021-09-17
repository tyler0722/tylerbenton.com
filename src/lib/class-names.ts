export type Argument = Record<string, boolean> | string | number | undefined | null;

const classNames = (...args: Argument[]) => {
  return args
    .reduce((classes: string[], arg: Argument) => {
      if (typeof arg === 'string' || typeof arg === 'number') {
        classes.push(arg.toString());
      } else if (Object.prototype.toString.call(arg) === '[object Object]') {
        for (let key in arg) {
          if (!!arg[key]) {
            classes.push(key);
          }
        }
      }
      return classes;
    }, [])
    .join(' ');
};

export default classNames;
