'use strict';

const { console } = require('./logger.js');
const { Attachment, Message, send, canAttach } = require('./delivery.js');

const main = async () => {
  const subj = 'De virtutem animi';
  const text = [
    'Lucio Verissimo Fratri,',
    'Hodie cogitavi de iis quae mihi et tibi sunt communia...',
  ];
  const data = text.join('\n');
  const message = new Message('Lucius Verus', subj, data);
  const file = new Attachment('./main.js');
  await message.attach(file);
  try {
    await send(message);
  } catch (error) {
    console.warn(error);
  }

  const file1 = message.files[0];
  const file2 = new Attachment('./logger.js');
  const file3 = { filename: './unknown.js' };
  const attachable = await canAttach([file1, file2, file3]);
  console.log({ attachable });
};

main();
