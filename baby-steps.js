let ans = 0;

for (let i = 2; i< process.argv.length; i++) {
    ans = ans+ +process.argv[i]; 
}

console.log(ans);