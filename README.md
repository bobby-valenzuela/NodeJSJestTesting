## Setup

Install dependencies
```sh
npm install
```

<br>

Bundle up JS (Create dist dir and dist/main.js)
```sh
npm run start
```
If you receive _'Error: error:0308010C:digital envelope routines::unsupported'_ then see post [here](https://stackoverflow.com/questions/69692842/error-message-error0308010cdigital-envelope-routinesunsupported)

<br>

TLDR: If running in Linux environment run...
```sh
export NODE_OPTIONS=--openssl-legacy-provider && npm run start
```

<br>

### Additional dependencies

Jest
```sh
npm install --save-dev jest
```

<br>

## Running Unit Tests

```sh
npm run test
```