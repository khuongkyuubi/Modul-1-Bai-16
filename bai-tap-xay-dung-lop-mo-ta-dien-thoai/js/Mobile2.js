class Mobile2 {
    batteryStatus;
    typingMessageMemory;
    inboxMessageMemory;
    sentMessageMemory;

    constructor(batteryStatus, typingMessageMemory, inboxMessageMemory, sentMessageMemory) {
        this.batteryStatus = batteryStatus;
        this.typingMessageMemory = typingMessageMemory;
        this.inboxMessageMemory = inboxMessageMemory;
        this.sentMessageMemory = sentMessageMemory;
        this.message = "";
    }

    checkOnOff() {


    }

    turnOnTurnOff() {

    }

    charging() {
        this.batteryStatus++;
        return this.batteryStatus;

    }

    // set nội dung message
    setMessage(message) {
        this.message = message;
    }

    sendMessage(message, mobile) {
        mobile.setMessage(message);

    }

    receiveMessage() {
        return this.message;
    }
}

// Tạo 2 đối tượng mobile rồi gửi tin nhắn qua lại nhau
let xiaomi = new Mobile2(90, 10, 10, 10);
let iphone = new Mobile2(90, 10, 10, 10);


// gửi tin nhắn từ xiaomi sang iphone
xiaomi.sendMessage("Hello iphone", iphone);
console.log(iphone.receiveMessage());//