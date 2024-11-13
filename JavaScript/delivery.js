'use strict';

const fs = require('node:fs');

class Message {
  constructor(to, subject, text) {
    this.to = to;
    this.subject = subject;
    this.text = text;
    this.files = [];
  }

  async attach(filename) {
    console.log('Attach file:', filename);
    const readable = fs.createReadStream(filename);
    const data = [];
    for await (const chunk of readable) data.push(chunk);
    const content = Buffer.concat(data);
    this.files.push({ filename, content });
  }

  async send() {
    console.log('Sending message...');
    console.log(this);
    throw new Error('Nullae electronicae epistulae in Roma');
  }

  warn(cause) {
    const reason = `Message can not be sent to: ${this.to}`;
    const error = new Error(reason, { cause });
    console.warn(error);
  }
}

module.exports = { Message };
