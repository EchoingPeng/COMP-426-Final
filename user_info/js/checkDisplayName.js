

$(function () {

    const $availMessage = $('#availMessage');

    const debounce = (func, delay) => { 
        let debounceTimer 
        return function() { 
            const context = this
            const args = arguments 
                clearTimeout(debounceTimer) 
                    debounceTimer 
                = setTimeout(() => func.apply(context, args), delay) 
        } 

        
    }  

    $('#display_name').keyup(debounce(checkAvail, 1500));
    $('.signInButton').on('click', SignIn);


    function checkAvail(event) {
        event.preventDefault();

        let username = $('#display_name').val();
   
        axios.get(`http://localhost:3000/private/`, { headers: { "Authorization": "Bearer " + localStorage.getItem('currentuserjwt') } })
        .then(response => {
            if(response.status === 200){
                let resList = response.data.result;
                
                if (username==='') {
                    return;
                } else {
                    if (!resList.includes(username)) {
                        setTimeout(() => {
                            $availMessage.html('<span class="has-text-success" style="color:green">You can use this name!</span>');
                            console.log('You can use this name')
                        }, 500);
                    } else {
                        setTimeout(() => {
                            $availMessage.html('<span class="has-text-danger" style="color:red">Sorry, this name is not available. </span>');
                            console.log('You cannot use this name')
                        }, 500);
    
                    }
                }
                
            }
        }).catch(error => {
            $signUpMessage.html('<span class="has-text-danger">Something is wrong</span>');
            console.log(error.response)

        });
    }
    

});


