// compose function
function compose(...fns) {
    return fns.reduce(
        function reducer (accumulator, current) {
            return function returnedFunc(...args) {
                return accumulator(current(...args))
          }
         }
      )
}