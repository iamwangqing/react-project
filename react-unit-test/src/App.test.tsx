import {
  render,
  screen,
  fireEvent,
  waitFor,
  renderHook,
} from "@testing-library/react";
import App from "./App";
import Toggle from "./Toggle";
import { act } from "react";
import useCounter from "./useCounter";

test("toggle", async () => {
  const { container } = render(<Toggle />);

  expect(container.querySelector("p")?.textContent).toBe("close");

  act(() => {
    fireEvent.click(container.querySelector("button")!);
  });

  // expect(container.querySelector("p")?.textContent).toBe("open");
  await waitFor(
    () => expect(container.querySelector("p")?.textContent).toBe("open"),
    {
      timeout: 3000,
    }
  );
});

test("useCounter", () => {
  const hook = renderHook(() => useCounter(0));

  const [count, increment, decrement] = hook.result.current;

  act(() => {
    increment(2);
  });

  expect(hook.result.current[0]).toBe(2);

  act(() => {
    decrement(1);
  });

  expect(hook.result.current[0]).toBe(1);

  hook.unmount();
});

// test("renders learn react link", () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
