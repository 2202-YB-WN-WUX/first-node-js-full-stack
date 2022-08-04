// declare our settings
const endpointURL = "http://localhost:3000/vegetables";

$.ajax({
    type: 'GET',
    url: endpointURL,
    success: function (data) {
        console.log(data);
    },
    error: function (error) {
        console.log(error);
    }
})