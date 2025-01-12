# TypeScript Nullish Coalescing and Optional Chaining Issues

This repository demonstrates a common error in TypeScript related to handling null or undefined values.  The `bug.ts` file shows code that compiles correctly but throws a runtime error because it attempts to call `toUpperCase()` on a potentially null value.  The solution in `bugSolution.ts` demonstrates the use of optional chaining and the nullish coalescing operator to prevent this error.

## How to Reproduce

1. Clone this repository.
2. Compile the `bug.ts` file using the TypeScript compiler (`tsc bug.ts`).
3. Run the compiled JavaScript file. You'll see a runtime error.
4. Compile and run `bugSolution.ts` to see the corrected version.