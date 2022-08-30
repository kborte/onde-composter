import axios from "axios";

function postRequest({rname, rphone, remail, rcomment}){
    axios.post("https://thawing-peak-93370.herokuapp.com/api/auth/registration", {
        name: rname,
        phoneNumber: rphone,
        email: remail,
        comment: rcomment
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

export default postRequest;