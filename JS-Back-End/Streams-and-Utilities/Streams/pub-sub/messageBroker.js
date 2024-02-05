const events = {};

function subscribe(eventType, callback) {
    if (!events[eventType]) {
        events[eventType] = [];
    }
    events[eventType].push(callback);
};

function publish(eventType, data) {
    events[eventType]?.forEach(callback => callback(data));
};

module.exports = {
    subscribe,
    publish
}
