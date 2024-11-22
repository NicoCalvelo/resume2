// function that allows to send a message to a discord channel via a webhook url
export async function sendEventToDiscord(message) {
    const url = process.env.REACT_APP_DISCORD_WEBHOOK_EVENTS;
    const data = { content: message };
  
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    return response;
  }
  
  
  export async function sendMessageToDiscord(message){
    const url = process.env.REACT_APP_DISCORD_WEBHOOK_MESSAGES;
    const data = { content: message };
  
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    return response;
  }