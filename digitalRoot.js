function digital_root(n) { 
    const digits = n.toString().split('');
    const realDigits = digits.map(Number); 
    let sum = 0;
    for (let i = 0; i < realDigits.length; i++) {
        sum += realDigits[i];
    }
    if (sum > 9) {
        return digital_root(sum);
    }
    return sum;
}