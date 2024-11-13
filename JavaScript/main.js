'use strict';

const { Message } = require('./delivery.js');

const main = async () => {
  const subj = 'De virtutem animi';
  const text = [
    'Lucio Verissimo Fratri,',
    'Hodie cogitavi de iis quae mihi et tibi sunt communia...',
  ];
  const data = text.join('\n');
  const message = new Message('Lucius Verus', subj, data);
  await message.attach('./main.js');
  try {
    await message.send();
  } catch (error) {
    message.warn(error);
  }
};

main();
