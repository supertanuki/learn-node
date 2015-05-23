var argsSum = 0;

for (var i = 2; i < process.argv.length; i++) {
    argsSum += Number(process.argv[i]);
}

console.log(argsSum);
