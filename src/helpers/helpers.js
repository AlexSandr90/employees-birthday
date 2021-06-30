export const storage = window.localStorage;

export const getData = (url, setter) => {
    fetch(url)
        .then(data => data.text()
        )
        .then(data => {
            console.log('data => ', data);
            setter(JSON.parse(data))
        });
};

export const getAlphabet = (charA, charZ) => {
    const alphabet = [];
    let i = charA.charCodeAt(0);
    let j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        alphabet.push(String.fromCharCode(i).toUpperCase());
    }
    return alphabet;
};