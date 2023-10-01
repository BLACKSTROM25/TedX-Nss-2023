no = document.getElementById('number')
tier = document.getElementById('tier')
name2Wrap = document.getElementById('name2Wrap')
name3Wrap = document.getElementById('name3Wrap')
name4Wrap = document.getElementById('name4Wrap')
name5Wrap = document.getElementById('name5Wrap')
name1 = document.getElementById('name1')
name2 = document.getElementById('name2')
name3 = document.getElementById('name3')
name4 = document.getElementById('name4')
name5 = document.getElementById('name5')
email = document.getElementById('email')
form = document.getElementById('form')
let show_names = () =>{
    name2Wrap.classList.remove('show');
    name3Wrap.classList.remove('show');
    name4Wrap.classList.remove('show');
    name5Wrap.classList.remove('show');
    
    for(let i = 2; i<= no.value;i++){
        console.log(i)
        window['name'+i+'Wrap'].classList.add('show')
;    }
    
    document.getElementById('del').classList.add('hidden')
    
    tier = document.getElementById('tier').value;
    let price = 0;
    if (tier == 'Premium'){
        price = 500
    } else if(tier == 'Regular' ){
        price = 300
    }

    document.getElementById('amount').innerHTML = '₹'+(price * no.value)
}
no.addEventListener("change", show_names);
tier.addEventListener("change", show_names);

//discord
function sendDiscordWebhookMessage(name) {
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/1149612623629922387/lbcM-RFMzr__ceYzViaFFeYcepo-2xOXlZvvlnsaX15QqJIU7vpjxmnqGLefCJqq51IJ");
    // Replace the URL in the open method with yours
    request.setRequestHeader('Content-type', 'application/json');
  
    var myEmbed = {
      author: {
        name: "Tedx Bot"
      },
      title: "Registration!",
      description: name + ' just registered!',
      color: hexToDecimal("#eb0028")
    }
  
    var params = {
      username: "Tedx Bot 2023",
      embeds: [myEmbed]
    }
  
    request.send(JSON.stringify(params));
  
    // Function that converts a color HEX to a valid Discord color
    function hexToDecimal(hex) {
      return parseInt(hex.replace("#", ""), 16)
    }
  }
  
  // Call the function to send the Discord webhook message
  
  
//

sub = document.getElementById('submitBtn')

let check = () => {
    phone = document.getElementById('phone').value
    upi = document.getElementById('upi').value
    tier = document.getElementById('tier').value
    let checked = true;
    let error = '';
    if(!(upi.length > 5)){
        checked = false;
        error = 'UPI Tx ID should be atleast 6 characters long'
    }
    if(!(phone.length > 9)){
        checked = false;
        error = 'Phone Number should be atleast 10 characters long'
    }
    if(tier == 'null'){
        checked = false;
        error = 'Please select ticket Tier'
    }

    for(let i = 1; i<= no.value;i++){
        console.log(window['name'+i].value.length)
        if (window['name'+i].value.length == 0){
            checked = false;
            error = 'Please fill in all the names'
        }
;    }

    if(!(email.value.length > 5)){
        checked = false;
        error = 'Please fill in email'
    }

    console.log(checked)

    if(!checked){
        alert(error)
    } else if (checked){
        //document.getElementById('form').submit()


        const formData = new FormData(form);
        const googleFormsUrl = "https://docs.google.com/forms/d/e/1FAIpQLSegcGMDEZLhBMz04oOj8vhbc9DYU3FVigiAV-9hV_QtaYevMw/formResponse";

        fetch(googleFormsUrl, {
            method: "POST",
            body: formData,
            mode: "no-cors",
        })
            .then((response) => {
                    console.log(response)
                    alert("Registered successfully! Tickets will be sent to you via email after verification of payment.");
                    form.reset();
                
            })
            .catch((error) => {
                console.error("Error:", error);
            });


        sendDiscordWebhookMessage(email.value);
    }

    
}

sub.addEventListener('click', (event) => {event.preventDefault();check();})
document.getElementById('form').addEventListener('submit', (event) => {event.preventDefault();})

let toggleInstruct = () => {
    document.getElementById('alert-wrap').classList.toggle('hidden');
    document.getElementById('body').classList.toggle('scrollStop');
}