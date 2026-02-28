let testResults = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"];

let passCount = 0;
let failCount = 0;
let skipCount= 0;

// Count results
for (let i = 0; i < testResults.length; i++) {
  if (testResults[i] === "pass") {
    passCount++;
  } else if (testResults[i] === "fail") {
    failCount++;
  } else if (testResults[i] === "skip") {
    skipCount++;
  }
}

let totalTests = testResults.length;
let passRate = ((passCount / totalTests) * 100).toFixed(2);

//logic
let verdict;

if (failCount === 0) {
  verdict = "READY FOR RELEASE";
} else if (failCount <= 2) {
  verdict = "REVIEW BEFORE RELEASE";
} else {
  verdict = "BLOCK RELEASE";
}

// Final Report
console.log(`Total Tests: ${totalTests}`);
console.log(`Passed: ${passCount}`);
console.log(`Failed: ${failCount}`);
console.log(`Skipped: ${skipCount}`);
console.log(`Pass Rate: ${passRate}%`);
console.log(`VERDICT: ${verdict}`);
