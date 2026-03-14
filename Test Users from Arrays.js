function buildUsers(names, roles) {

  return names.map((name, index) => {

    // create username
    const username = name
      .toLowerCase()
      .replace(/\s+/g, "_");

    // create email
    const email = `${username}@playwrightbatch.com`;

    // return user object
    return {
      username: username,
      email: email,
      role: roles[index]
    };

  });

}


// Example input
const names = ["Amit Kumar", "Neha Singh"];
const roles = ["admin", "viewer"];

// call function
const users = buildUsers(names, roles);

// print result
console.log(users);