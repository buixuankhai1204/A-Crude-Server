export class Task {
    constructor(public _id: string, public title: string, public projectName: string, public isDone: boolean, public createdAt: string) {
        this._id = _id;
        this.title = title;
        this.projectName = projectName;
        this.isDone = isDone;
        this.createdAt = createdAt;
    }
}
