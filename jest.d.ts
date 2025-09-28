import "@testing-library/jest-dom";

declare global {
  const jest: typeof import("jest") & {
    mock: (moduleName: string, factory?: () => any) => void;
  };
  const describe: jest.Describe;
  const it: jest.It;
  const expect: jest.Expect;
  const beforeEach: jest.Lifecycle;
  const afterEach: jest.Lifecycle;
  const beforeAll: jest.Lifecycle;
  const afterAll: jest.Lifecycle;
}
