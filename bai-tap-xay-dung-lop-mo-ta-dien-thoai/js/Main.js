let iphone = new Mobile("Iphone");
let samsung = new Mobile("Samsung");


iphone.turnOn();
iphone.writeMessage("Hello Samsung!");
iphone.sendMessage(samsung);

console.log(samsung.readInbox(0));
console.log(iphone.readOutbox(0));

