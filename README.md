# TypeScript Concepts

## Question 01: How does TypeScript help in improving code quality and project maintainability?

TypeScript improves code quality by adding **static type checking**, which helps catch errors while writing code instead of during runtime. It makes the code more **predictable** and **easier to read** by clearly defining what type of data each variable, function, or object should have. This reduces bugs, improves **auto-completion** in code editors, and helps teams understand and maintain the code better. It also supports long-term project stability by ensuring type safety, which prevents unintended changes from breaking existing features.

---

## Question 02: Provide an example of using union and intersection types in TypeScript.

### Union Type Example

A union type allows a variable to hold more than one type or value.

```ts
type Status = "success" | "error";

function handleStatus(status: Status) {
  if (status === "success") {
    console.log("Operation completed successfully.");
  } else {
    console.log("Operation failed.");
  }
}




## Intersection Type Example

An **intersection type** combines multiple types into one. The resulting object must include **all the properties** from each of the combined types.

### Concept:
If `type A = { x: string }` and `type B = { y: number }`, then `A & B` means an object must have **both** `x` and `y`.

### 💻 Code Example:

```ts
type User = { name: string };
type Admin = { role: string };

type AdminUser = User & Admin;

const admin: AdminUser = {
  name: "Alice",
  role: "Manager"
};
