// Global counter using var
var globalCounter = 0;

// Fixed values using const
const TOTAL_USERS = 8;
const ROLES = ["admin", "editor", "viewer", "tester", "manager"];

for (let i = 1; i <= TOTAL_USERS; i++) {
  globalCounter++;

  // Generate padded ID
  let userId = "USR-" + String(i).padStart(4, "0");

  // Sequential name and email
  let name = `TestUser_${i}`;
  let email = `testuser${i}@testingacademy.com`;

  // Role cycling
  let role = ROLES[(i - 1) % ROLES.length];

  // Every 3rd user inactive
  let status = (i % 3 === 0) ? "INACTIVE" : "ACTIVE";

  // Print formatted output
  console.log(`${userId} | ${name} | ${email} | ${role} | ${status}`);
}

console.log(`Total Users Generated: ${globalCounter}`);