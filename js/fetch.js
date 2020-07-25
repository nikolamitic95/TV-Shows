export const fetch = (url, onSuccess) => {
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.send();

    request.addEventListener("load", () => {
        const data = JSON.parse(request.responseText);
        onSuccess(data);
    })
}