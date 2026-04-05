// Debounce: delays function execution until calls stop for a fixed time.
// Use it to avoid repeated API calls during rapid events like typing or resizing.

let timerId = null;
const delay = 2000;

// Simulates an API call that should run only after user stops typing.
const search = function (query) {
  console.log("Query searched was:", query);
};

function resetter(query) {
  // Debounce step 1:
  // Cancel the previously scheduled call (if any).
  // This ensures only the latest input is considered.
  clearTimeout(timerId);

  // Debounce step 2:
  // Schedule a new call after `delay` ms.
  // If resetter() is called again before delay ends, this timer is cancelled.
  timerId = setTimeout(() => {
    search(query);
  }, delay);
}

// Example usage: with a single call, search runs once after 2 seconds.
resetter("Hello");
