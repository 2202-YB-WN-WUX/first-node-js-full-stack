// declare our settings
const endpointURL = "http://localhost:3000/vegetables";
const result = document.getElementById('result');
console.log("hello");

let showData = (data) => {

    data.forEach(item => {
        result.innerHTML += `
        ${item.name} ${item.colour} <br>
        `
    });
}

$.ajax({
    type: 'GET',
    url: endpointURL,
    success: function (data) {
        console.log(data);
        showData(data);

    },
    error: function (error) {
        console.log(error);
    }
})


$.ajax({
    type: 'GET',
    url: "http://localhost:3000/dinos",
    success: function (data) {
        console.log(data);
        showData(data);

    },
    error: function (error) {
        console.log(error);
    }
})