# babylon-error
Reproduce a strange bug in the current (6.8.2) version of Babylon

To observe the error in action, just run:

    npm install
    npm run build

Or, alternatively:

    ./build.sh

Which is exactly the same thing. It will attempt to babelify and webpack the
`index.js` into `dist/bundle.js`, but will run into an error as described in
the source file. The exact output from the webpack command should match that
in [build_result](./build_result).
