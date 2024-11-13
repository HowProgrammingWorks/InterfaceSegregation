'use strict';

const fs = require('node:fs');
const { Console } = require('node:console');
const { PassThrough } = require('node:stream');

const fileStream = fs.createWriteStream('./mail.log');
const passThrough = new PassThrough();
passThrough.pipe(fileStream);
passThrough.pipe(process.stdout);
const console = new Console({ stdout: passThrough });

module.exports = { console };
