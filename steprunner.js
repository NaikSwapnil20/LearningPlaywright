function runStep(stepName, actionFn) {

  console.log(`Starting step: ${stepName}`);

  try {
    const result = actionFn();

    return {
      stepName: stepName,
      passed: true,
      message: result
    };

  } catch (error) {

    return {
      stepName: stepName,
      passed: false,
      message: error.message
    };

  }

}


// Example 1 — successful step
const step1 = runStep("open dashboard", () => "Page loaded");

console.log(step1);


// Example 2 — failing step
const step2 = runStep("submit form", () => {
  throw new Error("Button not found");
});

console.log(step2);