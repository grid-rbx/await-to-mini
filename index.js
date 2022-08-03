/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to(promise, errorExt) {
  return (
    promise.then <
    [null, T] >
    ((data) => [null, data]).catch <
    [U, undefined] >
    ((err) => {
      if (errorExt) {
        const parsedError = Object.assign({}, err, errorExt);
        return [parsedError, undefined];
      }

      return [err, undefined];
    })
  );
}

export default to;
