function rot13(message) {

    let str = "";

    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabet = alpha.map((x) => String.fromCharCode(x));

    const Alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const Alphabet = Alpha.map((x) => String.fromCharCode(x));

    function add13toCharCodeLowerCase(input) {
        let partOne = (input.charCodeAt() - 97);
        if (partOne < 0) {
            return input;
        } else {
            partOne += 13;
            if (partOne > 25) {
                partOne -= 26
                str += alphabet[partOne];
            } else {
                str += alphabet[partOne];
            }
        }
    }

    function add13toCharCodeUpperCase(input) {
        let partOne = (input.charCodeAt() - 65);
        if (partOne < 0) {
            str += input;
        } else if (25 < partOne && partOne <= 31) {
            str += input;
        } else if (58 <= partOne && partOne <= 62) {
            str += input;
        } else {
            partOne += 13;
            if (partOne > 25) {
                partTwo = (partOne - 26)
                str += Alphabet[partTwo];;
            } else {
                str += Alphabet[partOne];
            }
        }
    }

    function isUpperCase(str) {
        return str === str.toUpperCase();
    }

    for (let i = 0; message.length > i; i++) {
        if (isUpperCase(message[i]) === true) {
            add13toCharCodeUpperCase(message[i])
        } else {
            add13toCharCodeLowerCase(message[i])
        }
    }
    return str;
}

