const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

// Initialize the WhatsApp client
const client = new Client();

// Generate and display the QR code
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

// Confirm when the client is ready
client.on('ready', () => {
  console.log('WhatsApp bot is ready!');
});

// Handle incoming messages
client.on('message', (msg) => {
  if (msg.body.toLowerCase() === 'hi') {
    msg.reply('Hello! How can I assist you today?');
  }
});

// Start the client
client.initialize();
