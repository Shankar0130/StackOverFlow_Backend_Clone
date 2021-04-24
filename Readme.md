# Small Version of StackOverFlow Backend

## Tech Stack

1. NodeJS
2. ExpressJS
3. PassportJS
4. MongoDB
5. Mongoose
6. Other NPM Packages - bcryptjs, body-parser, jsonwebtoken, nodemon,
   passport-jwt, validator
7. Postman

| Route Number-Type | Route                       | Description                                      | ACCESS  |
| ----------------- | --------------------------- | ------------------------------------------------ | ------- |
| R01- GET          | /api/auth/                  | just for testing                                 | PUBLIC  |
| R02- POST         | /api/auth/register/         | route for registration of users                  | PUBLIC  |
| R03- POST         | /api/auth/login             | route for login of users                         | PUBLIC  |
| R04- GET          | /api/auth/profile           | route for user profile                           | PRIVATE |
| R05- GET          | /api/profile/               | route for personnal user profile                 | PRIVATE |
| R06- POST         | /api/profile/               | route for UPDATING/SAVING personnal user profile | PRIVATE |
| R07- GET          | /api/profile/:username      | route for getting user profile based on USERNAME | PUBLIC  |
| R08- GET          | /api/profile/find/everyone  | route for getting user profile of EVERYONE       | PUBLIC  |
| R09- DELETE       | /api/profile/               | route for deleting user based on ID              | PRIVATE |
| R10- POST         | /api/profile/workrole/      | route for adding work profile of a person        | PRIVATE |
| R11- DELETE       | /api/profile/workrole/:w_id | route for deleting a specific workrole           | PRIVATE |
| R12- GET          | /api/questions/             | route for showing all questions                  | PUBLIC  |
| R13- POST         | /api/questions/             | route for submitting questions                   | PRIVATE |
| R14- POST         | /api/questions/answers/:id  | route for submitting answers to questions        | PRIVATE |
| R15- POST         | /api/questions/upvote/:id   | route for for upvoting                           | PRIVATE |
