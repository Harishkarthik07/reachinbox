const { Client } = require('@elastic/elasticsearch');
const client = new Client({ node: 'http://localhost:9200' });

async function indexEmail(id, data) {
  await client.index({
    index: 'emails',
    id,
    document: data
  });
}

async function searchEmails(query) {
  const result = await client.search({
    index: 'emails',
    query: {
      multi_match: {
        query,
        fields: ["subject", "body"]
      }
    }
  });
  return result.hits.hits;
}

module.exports = { indexEmail, searchEmails };
