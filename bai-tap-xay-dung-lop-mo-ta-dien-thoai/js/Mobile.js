class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.inbox = [];
        this.outbox = [];
        this.message = "";
        this.status = false;
    }

    turnOn() {
        if (!this.status) {
            this.status = true;
        }
    }

    writeMessage(message) {
        this.message = message;

    }

    sendMessage(phone) {
        if (this.status) {
            phone.inbox.push(this.message);
            this.outbox.push(this.message);
        }

    }

    readInbox(index) {
        return this.inbox[index];
    }


    readOutbox(index) {
        return this.outbox[index];
    }

    charging() {
        if (this.battery < 100) {
            this.battery++;
        }
    }

    turnOff() {
        if (this.battery <= 0) {
            this.status = false;
        }
        if (this.status) {
            this.status = false;
        }
    }
}