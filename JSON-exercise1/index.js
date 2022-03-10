const showPersonnelBtn = document.querySelector('#show-personnel-btn')

const personnelTable = document.querySelector('#personnel-table')

showPersonnelBtn.addEventListener('click',loadPersonnel)

function loadPersonnel() {

    loading.style.display = 'block'

    const req = new XMLHttpRequest();
    req.open('GET','personels.json',true);

    setTimeout(() => {

        req.onload = function () {
            loading.style.display = 'none'

            if (this.status == 200) {
                let personnels = JSON.parse(this.responseText);
                let html = ''
                personnels.forEach(personnel => {
                    html += `
                        <tr>
                            <td>${personnel.firstName}</td>
                            <td>${personnel.lastName}</td>
                            <td>${personnel.age}</td>
                            <td>${personnel.statu}</td>
                            <td>${personnel.location}</td>
                        </tr>
                        ` 
                });
                personnelTable.innerHTML = html
            } else {
                alert(`Error ${this.status}`)
            }
        }
        req.send()
    }, 2000);
}
