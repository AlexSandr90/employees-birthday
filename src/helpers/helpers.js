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