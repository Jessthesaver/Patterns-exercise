export default class EventHandler {
    constructor() {
        this.history = [];
    }

    executeCommand(command, ...args) {
        command.execute(...args);
        this.history.push(command);
    }

    undo() {
        const command = this.history.pop();
        command.undo();
    }
}
