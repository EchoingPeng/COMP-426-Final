//import axios from 'axios'

let currentuser;

async function register() {
    username = $("#signup-username").val()
    email = $("#signup-email").val()
    passwords = $("#signup-password").val()
    birthday = $("#datepicker").datepicker('getDate')
    zodiacsign = getZodiacSign(birthday.getDate(), birthday.getMonth())

    console.log(zodiacsign)

    try {
        const result = await axios.post(`http://localhost:3000/account/create`, { 'name': username, "pass": passwords, "data": { "birthday": birthday, "sign": zodiacsign } })
        console.log(result)
        if (result.status == 200) {
            $("input[value='Create account']").attr('value', "success")
            window.location.href = "/user_info/"
        }
    } catch (error) {
        console.log("haha")
        $("input[value='Create account']").attr('value', "Not Sucessful. Try Again.")



    }
    // return result;
};

async function login() {
    logusername = $("#signin-email").val()
    logpasswords = $("#signin-password").val()

    console.log(logusername)


    try {
        const result = await axios.post(`http://localhost:3000/account/login`, { 'name': logusername, "pass": logpasswords })

        if (result.status == 200) {

            $("input[value='Login']").attr('value', "Success")
            currentuser = result.data


            localStorage.setItem('currentusername', currentuser.name);
            localStorage.setItem('currentuserjwt', currentuser.jwt);
            localStorage.setItem('currentzodiac', currentuser.data.sign);
            localStorage.setItem('currentbirthday', currentuser.data.birthday);
            console.log(currentuser)
            window.location.href = "horoscope.html"
        }
    } catch (error) {
        console.log(error)
        $("input[value='Login']").attr('value', "Not Sucessful. Try Again.")



    }
    // return result;
};


function getZodiacSign(day, month) {


    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "capricorn";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "aquarius";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "pisces";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "aries";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "taurus";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "gemini";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "cancer";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "leo";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "virgo";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "libra";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "scorpio";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "sagittarius";
    }
}




$(document).ready(() => {

    const $root = $('body');



    $("input[value='Create account']").on('click', register);
    $("input[value='Login']").on('click', login);

    // async function getAllAuthors() {
    //     const a = await axios.get("http://localhost:3000/public/zodiacData")
    //     console.log(a);

    // }

    // getAllAuthors()


    // const  result  =  await  axios.get(`http://localhost:3000/private/record`,   {  headers:  {  "Authorization":   "Bearer "  +  localStorage.getItem('currentuserjwt')  }  })
})