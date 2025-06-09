const { pipeline } = require('@xenova/transformers');

let classifier;

async function initClassifier() {
  classifier = await pipeline('zero-shot-classification');
}

async function categorizeEmail(subject, body) {
  const labels = ["Interested", "Meeting Booked", "Not Interested", "Spam", "Out of Office"];
  const result = await classifier(subject + "\n" + body, labels);
  return result.labels[0];
}

module.exports = { initClassifier, categorizeEmail };
