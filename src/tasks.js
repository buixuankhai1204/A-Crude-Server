"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
var Task = /** @class */ (function () {
    function Task(_id, title, projectName, isDone, createdAt) {
        this._id = _id;
        this.title = title;
        this.projectName = projectName;
        this.isDone = isDone;
        this.createdAt = createdAt;
        this._id = _id;
        this.title = title;
        this.projectName = projectName;
        this.isDone = isDone;
        this.createdAt = createdAt;
    }
    return Task;
}());
exports.Task = Task;
