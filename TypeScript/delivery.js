'use strict';

const fs = require('node:fs');
const { console } = require('./logger.js');

class Attachment {
  constructor(filename) {
    this.filename = filename;
    this.readable = fs.createReadStream(filename);
  }
}

class Message {
  constructor(to, subject, text) {
    this.to = to;
    this.subject = subject;
    this.text = text;
    this.files = [];
  }

  async attach({ filename, readable }) {
    const data = [];
    for await (const chunk of readable) data.push(chunk);
    const content = Buffer.concat(data);
    this.files.push({ filename, content });
  }
}

const send = async (message) => {
  console.log('Sending message...');
  console.log(message);
  throw new Error('Nullae electronicae epistulae in Roma');
};

const toBool = [() => true, () => false];

const fileExists = (name) => fs.promises.access(name).then(...toBool);

const canAttach = async (files) => {
  for (const { filename } of files) {
    const exists = await fileExists(filename);
    if (!exists) return false;
  }
  return true;
};

module.exports = { Attachment, Message, send, canAttach };
