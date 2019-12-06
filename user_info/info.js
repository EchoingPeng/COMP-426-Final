async function updateUser() {

    console.log(localStorage.getItem('currentusername'))
    console.log(localStorage.getItem('currentuserjwt'))



    const result = await axios.post(`http://localhost:3000/user/record`, { name: "1", data: "2123" }, { headers: { "Authorization": "Bearer " + localStorage.getItem('currentuserjwt') } })
    console.log(result)

    // username = $("#signup-username").val()
    // email = $("#signup-email").val()
    // passwords = $("#signup-password").val()
    // birthday = $("#datepicker").datepicker('getDate')
    // zodiacsign = getZodiacSign(birthday.getDate(), birthday.getMonth())

    // console.log(zodiacsign)

    // try {
    //     const result = await axios.post(`http://localhost:3000/account/create`, { 'name': username, "pass": passwords, "data": { "birthday": birthday, "sign": zodiacsign } })
    //     console.log(result)
    //     if (result.status == 200) {
    //         $("input[value='Create account']").attr('value', "success")
    //     }
    // } catch (error) {
    //     console.log("haha")
    //     $("input[value='Create account']").attr('value', "Not Sucessful. Try Again.")



    // }
    // return result;
};





$(document).ready(() => {

    const $root = $('body');
    updateUser()




})