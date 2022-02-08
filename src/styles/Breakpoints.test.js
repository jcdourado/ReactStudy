import { breakAt, BreakpointSizes } from "./Breakpoints";

test.each([
  [BreakpointSizes.sm],
  [BreakpointSizes.md],
  [BreakpointSizes.lg],
  [BreakpointSizes.xl],
])("break at %i", (size) => {
  expect(breakAt(size)).toEqual(`@media (min-width: ${size}px)`);
});
