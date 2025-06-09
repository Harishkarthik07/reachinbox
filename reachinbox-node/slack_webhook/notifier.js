const axios = require('axios');

async function sendSlackNotification(text, webhookUrl) {
  await axios.post(webhookUrl, { text });
}

async function triggerWebhook(data, url) {
  await axios.post(url, data);
}

module.exports = { sendSlackNotification, triggerWebhook };
