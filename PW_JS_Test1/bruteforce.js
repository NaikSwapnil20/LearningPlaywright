// Fixed credentials & threshold (const)
const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const LOCK_THRESHOLD = 3;

// Global failed counter (var)
var failedAttempts = 0;

// Simulated login attempts
let attempts = [
  { email: "wrong", password: "wrong" },
  { email: "wrong", password: "wrong" },
  { email: "wrong", password: "wrong" },
  { email: "admin@testingacademy.com", password: "Test@1234" }
];

let index = 0;
let accountLocked = false;

do {
  let currentAttempt = attempts[index];

  // If already locked
  if (accountLocked === true) {
    console.log(`Attempt ${index + 1}: 🔒 ACCOUNT LOCKED - Rejected`);
    index++;
    continue;
  }

  // Validate credentials strictly
  if (
    currentAttempt.email === VALID_EMAIL &&
    currentAttempt.password === VALID_PASSWORD
  ) {
    console.log(`Attempt ${index + 1}: ✅ LOGIN SUCCESSFUL`);
  } else {
    failedAttempts++;
    console.log(
      `Attempt ${index + 1}: ❌ FAILED - Strike ${failedAttempts}/${LOCK_THRESHOLD}`
    );

    // Lock account if threshold reached
    if (failedAttempts === LOCK_THRESHOLD) {
      accountLocked = true;
      console.log(`🚨 ACCOUNT LOCKED after ${LOCK_THRESHOLD} consecutive failures`);
    }
  }

  index++;

} while (index < attempts.length);