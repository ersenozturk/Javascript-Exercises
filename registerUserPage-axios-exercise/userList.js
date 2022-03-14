const tbodyUserList = document.getElementById('tbodyUserList');

window.onload = ()=>{
    setTimeout(getUserListFromApi,2000);
    setInterval(getUserListFromApi, 7000);
}


const getUserListFromApi = async()=>{
    showLoading();

    try {
        const response = await axios ('https://reqres.in/api/users?page=1')
        const {data : userList} = response.data

        if (userList.length === 0) {
            alert('User not found')
            removeLoading();
        } else {
            tbodyUserList.innerHTML =''
            userList.forEach(user => {
                tbodyUserList.innerHTML += `
                <tr>
                <td>${user.id}</td>
                <td> <img src="${user.avatar}" alt=""></td>
                <td>${user.email}</td>
                <td>${user.first_name}</td>
                <td>${user.last_name}</td>
            </tr>       `
            });
            removeLoading() 
        }
    } catch (error) {
        alert(error);
        removeLoading();
    }

}
 
// getUserListFromApi();
