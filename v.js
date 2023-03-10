const inC = parseInt(readline());
for (let i = 0; i < inC; i++) {
    const ip = readline();
    let k = Math.pow(2,Math.abs(32 - +ip.split('/')[1]));
    console.log(k - 2);
}
