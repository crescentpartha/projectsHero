## Table of Contents

- [(Conceptual) JWT token and Pagination](#conceptual-jwt-token-and-pagination)
  - [70.5.1 (Conceptual) What is JWT and how does it work `(Must watch)`](#7051-conceptual-what-is-jwt-and-how-does-it-work-must-watch)
    - [`What is JWT?`](#what-is-jwt)
    - [`Authentication Vs Authorization`](#authentication-vs-authorization)
    - [`JWT Types:`](#jwt-types)
    - [`How JWT Works?`](#how-jwt-works)
    - [`What JWT Looks Like?`](#what-jwt-looks-like)
    - [`Summary of JWT:`](#summary-of-jwt)
  - [70.5.6 (Conceptual) How Pagination works? `(Must Watch)`](#7056-conceptual-how-pagination-works-must-watch)
    - [`What is Pagination?`](#what-is-pagination)
    - [`Uses of pagination:`](#uses-of-pagination)
    - [`Necessity:`](#necessity)
    - [`Steps of Pagination:`](#steps-of-pagination)
  - [Project's ACCESS\_TOKEN\_SECRET](#projects-access_token_secret)

# (Conceptual) JWT token and Pagination

## 70.5.1 (Conceptual) What is JWT and how does it work `(Must watch)`

### `What is JWT?`

> JWT = JSON WEB Token <br />
JWT is pronounced as `jot`

`Purpose of JWT:` ___Securely transmits information between two parties___ <br />
`Practical Example of JWT:` ___Student ID, Admit Card, NID, Passport___

**[🔼Back to Top](#table-of-contents)**

### `Authentication Vs Authorization`

`Authentication:` Who are you? | Login and Password <br />
`Authorization:` What you can do? | Add photo, Delete photo, and View photo etc | How much access do you have?

> ___JWT is mainly used for authorization purpose, not authentication.___

**[🔼Back to Top](#table-of-contents)**

### `JWT Types:` 

- ___Access Token___ and ___Refresh Token___

**[🔼Back to Top](#table-of-contents)**

### `How JWT Works?`

1. Client login with username and password
2. Server creates a token for the client
3. Server sends a token to the client
4. Client stores the token on either local storage or browser cookie (http only cookie) 
   - ___OR___ memory (context api, variable, redux store) as cache
5. Next time the client makes a request, a copy of the token is send to the server for authorization
   - `Authorization: Bearer <token>`
6. Server verifies the JWT signature before giving the authorization
7. Server responds to the client's request

**[🔼Back to Top](#table-of-contents)**

### `What JWT Looks Like?`

__Structure of JSON Web Token (JWT):__ `HEADER.Payload.signature` (3 parts)

**[🔼Back to Top](#table-of-contents)**

### `Summary of JWT:`

1. INDUSTRY STANDARD RFC 7519
2. Securely transmits information between parties as a JSON object
3. Digitally Signed

**[🔼Back to Top](#table-of-contents)**

## 70.5.6 (Conceptual) How Pagination works? `(Must Watch)`

### `What is Pagination?`

- Also known as paging
- A sequence of pages with connected content
- A process of dividing a large interconnected dataset in different pages (web pages)

**[🔼Back to Top](#table-of-contents)**

### `Uses of pagination:`

- Pagination is used when a list of articles spans across multiple pages.
- Long articles use pagination to break the article into a multi-page series.

**[🔼Back to Top](#table-of-contents)**

### `Necessity:`

- Reduces the weight of the page
- Good user experience

**[🔼Back to Top](#table-of-contents)**

### `Steps of Pagination:`

1. Getting total number of products from Database (Server-Side)
   - Get page count (Client-Side)
``` JavaScript
const count = data.count;
const pages = Math.ceil(count/10);
```

``` JavaScript
query { page: '5', size: '10' }
```

2. Create Pagination button (Client-Side)

``` JavaScript
Array() ⋙ empty array
Array(8) ⋙ empty array with length 8
[...Array(8)] ⋙ getting each of 8 empty elements
[...Array(8).keys] ⋙ getting index numbers of 76 elements // [0, 1, 2, 3, 4, 5, 6, 7]
[...Array(8).keys].map() ⋙ make buttons inside map of 8 indexes // [...Array(8).keys()].map()( number => <button>{number}</button>)
```

3. Set page & size state (Client-Side)
   - Fetching products according to query (page, size)
4. Getting page & size from `req.query` (Server-side)
   - `const page = parseInt(req.query.page);`
   - `const size = parseInt(req.query.size);`
5. Get products (Server-Side)
   - use `skip` & `limit`

**[🔼Back to Top](#table-of-contents)**

## Project's ACCESS_TOKEN_SECRET

``` JavaScript
ACCESS_TOKEN_SECRET=44f56449c17088460702e8ea13403b37a72e4fa13f17ca8463bad87baf6072a9ff6134121fc506affc28123d6677acafdd1f6f8d1064cf4dd732a156bc8d8192
```

**[🔼Back to Top](#table-of-contents)**

