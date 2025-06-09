# ReachInbox - Node.js Assignment

## Features
- Real-time IMAP sync
- Elasticsearch integration
- Email categorization using Transformers
- Slack + webhook notifications
- Suggested replies via OpenAI

## Setup
1. `npm install`
2. `docker-compose -f Docker/elasticsearch-compose.yml up`
3. Set environment variables for IMAP, OpenAI
4. `node app.js`
