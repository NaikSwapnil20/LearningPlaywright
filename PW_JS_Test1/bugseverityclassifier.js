let bugTitle = "Checkout page crashes on applying coupon";
let frequency = "always";   // "always", "often", "rarely"
let impact = "blocker";     // "blocker", "major", "minor"

let severity = "";
let description = "";

// Nested if-else classification
if (frequency === "always") {

  if (impact === "blocker") {
    severity = "P0";
    description = "Critical: Stop release immediately";
  } else if (impact === "major") {
    severity = "P1";
    description = "High: Fix before release";
  } else {
    severity = "P2";
    description = "Medium: Address in priority sprint";
  }

} else if (frequency === "often") {

  if (impact === "blocker") {
    severity = "P1";
    description = "High: Fix urgently";
  } else if (impact === "major") {
    severity = "P2";
    description = "Medium: Fix in current cycle";
  } else {
    severity = "P3";
    description = "Low: Schedule fix";
  }

} else if (frequency === "rarely") {

  if (impact === "blocker") {
    severity = "P2";
    description = "Medium: Monitor and fix soon";
  } else if (impact === "major") {
    severity = "P3";
    description = "Low: Fix when feasible";
  } else {
    severity = "P4";
    description = "Very Low: Cosmetic/Minor issue";
  }

} else {
  severity = "UNKNOWN";
  description = "Invalid frequency or impact value";
}

console.log(`Bug Title: ${bugTitle}`);
console.log(`Frequency: ${frequency}`);
console.log(`Impact: ${impact}`);
console.log(`Severity: ${severity} - ${description}`);