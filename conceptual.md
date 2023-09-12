### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON Web Token

- What is the signature portion of the JWT? What does it do?
  Acts as special identifier to validate the body and header to that token, by adding a secret. It can only be generated and verified using the secret.

- If a JWT is intercepted, can the attacker see what's inside the payload?
  Yes they can see the body and header, but they cant recreate the validation.

- How can you implement authentication with a JWT? Describe how it works at a high level.
  tokens which are generated and signed by the server side and are regenerated upon successful user login, which the client then sends along with each further website request to authorize the user's acccess.

- Compare and contrast unit, integration and end-to-end tests.
  unit tests compared a single function scope, integration ests focus on the multiple components ensuring they work together properly, and end to end tests simulate real user scenarios and using the entire app from start to finish.

- What is a mock? What are some things you would mock?
  A mock is a simulated object used in testing, to control the behavior of external components on isolated code.

- What is continuous integration?
  Continuous integration is a software development practice where code changes are frequently merged into a shared repository and automatically tested to ensure seamless collaboration and minimize errors.

- What is an environment variable and what are they used for?
  Continuous integration is a practice where developers frequently combine their code changes, and then the system automatically checks and tests the combined code

- What is TDD? What are some benefits and drawbacks?
  writing the tests before the code, to ensure code correctness first to avoid making bugs - but it can be a slower development process.

- What is the value of using JSONSchema for validation?
  to make a uniform output do it can be checked upon receipt for validity.

- What are some ways to decide which code to test?
  pick parts that are important, complex, often updated, or prone to errors

- What does `RETURNING` do in SQL? When would you use it?
  it displays confirmation of modified data after an insert, update, or delete operation

- What are some differences between Web Sockets and HTTP?
  web sockets

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
