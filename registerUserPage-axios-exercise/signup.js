//-------------------axios----------------------

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const registerBtn = document.querySelector("#submit");

window.addEventListener("load", ()=>{
    setTimeout(ecerciseFillFormInput,500)
});

function ecerciseFillFormInput() {
    email.value = "eve.holt@reqres.in";
    password.value = "pistol";
    localStorage.setItem("email", EncryptStringAES(email.value));
    localStorage.setItem("password", EncryptStringAES(password.value));
}

const postCustomerRegister = async ()=>{
    const dataBody = {  //postman's value of data-body
        email : email.value,
        password : password.value
    };
    // showLoading()
    try {
        const response = await axios ({
            url : 'https://reqres.in/api/register',
            method : 'post',
            data : dataBody
        });
        const{data : hostDataBody} = response;
        if (hostDataBody === undefined) {
            alert('undefined value');
            removeLoading();
        } else {
            localStorage.setItem('userId',EncryptStringAES(hostDataBody.id))
            localStorage.setItem('userToken',EncryptStringAES(hostDataBody.token))
            window.location.href = 'userList.html'
        }
    } catch (error) {
        alert(error);
        removeLoading();
    }
};


registerBtn.addEventListener('click',postCustomerRegister)

//-------------------fetch----------------------
// const apiRegister = async () => {
//     const bodyData = {
//         email : email.value,
//         password : password.value
//     }
//     console.log(bodyData);
//     console.log(JSON.stringify(bodyData));
//     showLoading();
//     fetch("https://reqres.in/api/register", {
//         method : "POST",
//         body : JSON.stringify(bodyData),
//         headers : {"Content-Type": "application/json"}
//     })
//     .then((response) => response.json())
//     .then((jsonResponse) => {
//         console.log(jsonResponse);
//         console.log(jsonResponse.token);
//         if (jsonResponse.token == undefined) {
//             alert(jsonResponse.error);
//             removeLoading();
//         }
//         else{
//             removeLoading();
//             localStorage.setItem("tokenKey", jsonResponse.token);
//             localStorage.setItem("tokenKeyEncrypted", EncryptStringAES(jsonResponse.token));
//             // window.location.href = "userList.html";
//         }
//     })
//     .catch((error)=>{
//         alert(error);
//         removeLoading();
//     })
// }






