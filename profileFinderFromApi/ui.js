class UI{
    constructor(){
        const profileContainer = document.querySelector('#profile-container')
        const alert = document.querySelector('#alert')

        this.profileContainer = profileContainer
        this.alert = alert
    }

    showProfile(profile){
        this.profileContainer.innerHTML = `
        <div class="car car-body">
            <div class="row">
                <div class="col-md-3">
                    <a href="">
                        <img src="https://picsum.photos/seed/picsum/200/300" class="img-thumbnail" alt="">
                    </a>
                </div>
    
                <div class="col-md-9">
                    <h4>Contact</h4>
                    <ul class="list-group">
                        <li class="list-group-item">
                            ${profile.name}
                        </li>
                        <li class="list-group-item">
                            ${profile.username}
                        </li>
                        <li class="list-group-item">
                            ${profile.website}
                        </li>
                        <li class="list-group-item">
                            ${profile.address.street}
                            ${profile.address.city}
                            ${profile.address.zipcode}
                        </li>
                        <li class="list-group-item">
                            ${profile.company.name}
                        </li>
                        <li class="list-group-item">
                            ${profile.phone}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    showAlert(text){
        this.alert.innerHTML = `${text} is not found`
    }

    clear(){
        this.profileContainer.innerHTML = '';
        this.alert.innerHTML = '';
    }
}