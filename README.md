# Mocha Typescript Sample

An sample project for writing mocha unittest in Typescript

## Execute Test

1. Restore node package

    ```
    npm install
    ```

1. Run Test

    ```
    npm test
    ```

1. Or execute test manually (Need global mocha, typescript, ts-node)

    ```
    mocha --compilers ts:ts-node/register
    ```