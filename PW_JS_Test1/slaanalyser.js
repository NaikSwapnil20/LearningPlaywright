
let responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;

let index = 0;
let totalRequests = responseTimes.length;

let minResponse = responseTimes[0];
let maxResponse = responseTimes[0];
let totalTime = 0;
let breachCount = 0;

while (index < totalRequests) {
  let currentTime = responseTimes[index];

  // Track min
  if (currentTime < minResponse) {
    minResponse = currentTime;
  }

  // Track max
  if (currentTime > maxResponse) {
    maxResponse = currentTime;
  }

  // Sum for average
  totalTime += currentTime;

  // Count SLA breaches
  if (currentTime > SLA_LIMIT) {
    breachCount++;
  }

  index++;
}

// Calculate average
let averageResponse = (totalTime / totalRequests).toFixed(2);

// Breach percentage
let breachPercentage = ((breachCount / totalRequests) * 100).toFixed(2);

// Overall status
let overallStatus = breachCount > 0 ? "❌ SLA VIOLATED" : "✅ SLA MET";

// Final Report
console.log(`Total Requests: ${totalRequests}`);
console.log(`Min Response: ${minResponse}ms`);
console.log(`Max Response: ${maxResponse}ms`);
console.log(`Average Response: ${averageResponse}ms`);
console.log(`SLA Breaches: ${breachCount} (${breachPercentage}%)`);
console.log(`Overall Status: ${overallStatus}`);