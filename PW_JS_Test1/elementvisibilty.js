let isPresent = true;
let isDisplayed = true;
let isEnabled = false;

let status;
let action;

// Determine Status
if (isPresent === false) {
  status = "NOT FOUND";
} else if (isPresent === true && isDisplayed === false) {
  status = "HIDDEN";
} else if (
  isPresent === true &&
  isDisplayed === true &&
  isEnabled === false
) {
  status = "DISABLED";
} else if (
  isPresent === true &&
  isDisplayed === true &&
  isEnabled === true
) {
  status = "READY";
}

// Determine Severity using ternary
let severity =
  isPresent === false
    ? "CRITICAL"
    : (isDisplayed === false || isEnabled === false)
    ? "WARNING"
    : "OK";

// Determine Action
if (status === "NOT FOUND") {
  action = "Element not present in DOM. Check locator or page load.";
} else if (status === "HIDDEN") {
  action = "Element is hidden. Wait for visibility or check UI state.";
} else if (status === "DISABLED") {
  action = "Element is visible but disabled. Wait for enable state or check preconditions.";
} else {
  action = "Safe to interact with element.";
}

console.log(`Status: ${status}`);
console.log(`Severity: ${severity}`);
console.log(`Action: ${action}`);