const todoListService = require('../Services/todoListService');
module.exports = class todoList {
    static async getAllTask(req, res, next) {

        const listTasks = await todoListService.getAllTasks(JSON.stringify(req.query), next);

        return res.status(200).json({
            status: "success",
            data: listTasks,
            message: "get All list task success"
        })
    }

    static async createTasks(req, res, next) {
        const taskObj = {
            title: req.body.title,
            projectName: req.body.projectName,
        }
        const task = await todoListService.createTask(taskObj, next);
        return res.status(200).json({
            status: "success",
            data: task,
            message: "create task success"
        })
    }

    static async updateStateTask(req, res, next) {

        const listTasks = todoListService.updateStateTask(req.params.id, req.body.isDone, next);

        res.status(200).json({
            status: "success",
            data: listTasks,
            message: "update task success"
        })
    }

    static async deleteTaskByTitle(req, res, next) {

        const listTasks = todoListService.deleteTaskByTitle(req.query.title, next);

        res.status(200).json({
            status: "success",
            data: listTasks,
            message: "delete task by title success"
        })
    }
}