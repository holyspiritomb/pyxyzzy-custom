# pyXyzzy-custom Client

## Dependencies:
- Node v20 or equivalent `nvm` environment (`.nvmrc` is provided)

## Building:

```bash
nvm use # if using nvm
npm install --include=dev
npm run build
```

The client will build in the `dist` directory, which can then be served via whatever server you like.

## Running:

`npm run start` will serve the contents of `dist` locally on your network on port 7070 via `npx serve`.

Caveat: If the python backend isn't running, the client will still run, but it will show the connecting screen and repeatedly attempt to communicate with the backend, until the backend is running.
