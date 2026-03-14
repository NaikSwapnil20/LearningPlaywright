function normalizeError(rawMessage) {

  // normalize message
  const normalized = rawMessage
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");

  let category;

  if (normalized.includes("timeout")) {
    category = "TIMEOUT";
  } 
  else if (normalized.includes("locator")) {
    category = "LOCATOR";
  } 
  else {
    category = "GENERAL";
  }

  console.log(`Normalized: ${normalized}`);
  console.log(`Category: ${category}`);
}


// input message
const rawMessage = "  Locator not found after   TIMEOUT ";

// call the function
normalizeError(rawMessage);