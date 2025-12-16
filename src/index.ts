import { prisma } from "./db";

async function createUser() {
  await prisma.user.create({
    data: {
      username: "Harkirat",
      password: "1232",
      age: 24,
      city: "Delhi",
    },
  });
}

createUser()
  .then(() => {
    console.log("User created");
  })
  .catch((e) => {
    console.error("Error creating user:", e);
  });
