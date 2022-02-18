// variables
const years = document.getElementById('years')
const months = document.getElementById('months')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const birthday = document.querySelector('[name=birthday]');

const loading = document.querySelector('#loading')

// default values on screen
years.innerHTML = "00";
months.innerHTML = "00";
days.innerHTML = "00";
hours.innerHTML = "00";
minutes.innerHTML = "00";
seconds.innerHTML = "00";


// loading section
function hideLoading(e) {
    loading.style.display = 'none'
}

// after 1000ms hideLoading func will be off-mode
setTimeout(hideLoading,1000);

// when user changed the input
birthday.addEventListener('change',function ageCalc(e) {
    let today = new Date()
    let birthDay = new Date(birthday.value)

    if (birthDay > today ) {
        alert('your birthday cannot be on a date later than this day')
    }else{
        let ageSecond = today.getSeconds() - birthDay.getSeconds();
        let ageMinute = today.getMinutes() - birthDay.getMinutes();
        let ageHour = today.getHours() -birthDay.getHours();
        let ageDate = today.getDate() - birthDay.getDate();
        let ageMonth = today.getMonth() - birthDay.getMonth();
        let ageYear = today.getFullYear() - birthDay.getFullYear();

// *******

    if (ageSecond<0) { ageMinute--; ageSecond += 60}
    if (ageMinute<0) { ageHour--; ageMinute += 60}
    if (ageHour<0) { ageDate--; ageHour += 24}
    if (ageDate<0) { 
    ageMonth--;
    let currentMonth = new Date().getMonth() + 1
        switch (currentMonth) {
            case (1 || 3 || 5 || 7 || 8 || 10 || 12):
                ageDate += 31
                break;
            case (2):
                ageDate += 28
                break;
            default:
                ageDate += 30
                break;
        }
    }
    if (ageMonth<0) {ageYear--; ageMonth+=12}


seconds.innerHTML = (ageSecond < 10 ? '0' : '') + ageSecond;
minutes.innerHTML = (ageMinute < 10 ? '0' : '') + ageMinute;
hours.innerHTML = (ageHour < 10 ? '0' : '') + ageHour;
days.innerHTML = (ageDate < 10 ? '0' : '') + ageDate;
months.innerHTML = (ageMonth < 10 ? '0' : '') + ageMonth;
years.innerHTML = (ageYear < 10 ? '0' : '') + ageYear;

    }
    setInterval(ageCalc,1000);

});