async function showUser() {

    console.log(localStorage.getItem('currentusername'))
    console.log(localStorage)

    $("#zodi_sign").attr("value", localStorage.getItem('currentzodiac'))

    try {
        const result = await axios.get(`http://localhost:3000/user/record`, { headers: { "Authorization": "Bearer " + localStorage.getItem('currentuserjwt') } })
        let resultobj = result.data.result
        console.log(result)

        $("#display_name").attr("value", resultobj.displayname)
        $("#zodi_sign").attr("value", resultobj.zodiasign)
        $("#country").attr("value", resultobj.country)
        $("#email").attr("value", resultobj.email)
        $("#gender").attr("value", resultobj.gender)
        $(".noUi-tooltip").attr("value", resultobj.age)
        var marginSlider = document.getElementById('slider-margin');
        if (marginSlider != undefined) {
            console.log(resultobj.age)
            noUiSlider.create(marginSlider, {
                start: [resultobj.age],
                step: 1,
                connect: [true, false],
                tooltips: [true],
                range: {
                    'min': 0,
                    'max': 100
                },
                format: wNumb({
                    decimals: 0,
                    thousand: ','

                })
            });
        }

        $("input[value='Submit']").on("click", UpdateUser)


    } catch (error) {
        $("input[value='Submit']").on("click", createUser)

    }


};

async function createUser() {


    currentuser = localStorage.getItem('currentusername')
    currentjwt = localStorage.getItem('currentuserjwt')

    displayname = $("#display_name").val()
    zodiasign = $("#zodi_sign").val()
    country = $("#country").val()
    email = $("#email").val()
    gender = $("#gender").val()
    age = $(".noUi-tooltip").text()

    console.log(zodiasign)
    data = { displayname: displayname, zodiasign: zodiasign, country: country, email: email, gender: gender, age: age }
    try {
        console.log(data)
        const result = await axios.post(`http://localhost:3000/user/record`, { data: data }, { headers: { "Authorization": "Bearer " + currentjwt } })
        console.log(result)
        window.location.href = "../horoscope.html"
    } catch (error) {

    }


};



async function UpdateUser() {
    console.log("enter update")

    currentuser = localStorage.getItem('currentusername')
    currentjwt = localStorage.getItem('currentuserjwt')

    displayname = $("#display_name").val()
    zodiasign = $("#zodi_sign").val()
    country = $("#country").val()
    email = $("#email").val()
    gender = $("#gender").val()
    age = $(".noUi-tooltip").text()

    // console.log(zodiasign)
    data = { displayname: displayname, zodiasign: zodiasign, country: country, email: email, gender: gender, age: age }
    try {
        console.log(data)
        const result = await axios.post(`http://localhost:3000/user/record`, { data: data }, { headers: { "Authorization": "Bearer " + currentjwt } })
        console.log(result)
        window.location.href = "../horoscope.html"
    } catch (error) {
        console.log(error)
    }
}


$(document).ready(() => {

    const $root = $('body');
    showUser()



})