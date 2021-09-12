exports.SomeFunction = function SomeFunction() {
    console.log(`Some Template String ${process.pid}`);

    console.log('Some Normal Single-Quote String ' + process.pid);
}
