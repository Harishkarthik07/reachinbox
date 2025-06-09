const Imap = require('imap');
const { simpleParser } = require('mailparser');

function connectIMAP({ user, password, host }) {
  return new Imap({
    user, password, host,
    port: 993, tls: true
  });
}

function fetchEmails(imap, callback) {
  imap.once('ready', () => {
    imap.openBox('INBOX', true, (err, box) => {
      if (err) throw err;
      const f = imap.seq.fetch(`${box.messages.total - 30}:*`, { bodies: '' });
      f.on('message', (msg) => {
        msg.on('body', async (stream) => {
          const parsed = await simpleParser(stream);
          callback(parsed);
        });
      });
    });
  });
  imap.connect();
}

module.exports = { connectIMAP, fetchEmails };
