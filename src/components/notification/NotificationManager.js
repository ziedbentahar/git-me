
class NotificationManager {
    constructor() {
        this.subscribers = [];
    }

    addSubscriber(subscriber) {
        this.subscribers = [...this.subscribers, subscriber];
    }

    removeSubscriber(subscriber) {
        this.subscribers = this.subscribers.filter(sub => sub !== subscriber);
    }

    notify(notification) {
       this.subscribers.forEach(subscriber => {
           subscriber(notification);
       })
    }
}

export default new NotificationManager();