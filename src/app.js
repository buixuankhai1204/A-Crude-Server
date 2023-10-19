"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function fetchData() {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, tasks, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3000/getAllTask')];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status: ".concat(response.status));
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    tasks = data.data;
                    renderTasks(tasks);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error('Error fetching data:', error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function renderTasks(tasks) {
    var taskList = document.getElementById('taskList');
    var i = 0;
    tasks.forEach(function (task) {
        var listItem = document.createElement('li');
        listItem.innerHTML = "\n            <span>".concat(task.title, "</span>\n            <span>").concat(task.projectName, "</span>\n            <span>").concat(task.createdAt, "</span>\n            <input type=\"checkbox\" id=\"state_").concat(i, "\" ").concat(task.isDone ? 'checked' : '', ">\n            <button onclick=\"deleteTask('").concat(task.title, "', '").concat(i, "')\">delete</button>\n            <button onclick=\"updateTask('").concat(!task._id, "', '").concat(i, "')\">update</button>\n        ");
        taskList.appendChild(listItem);
        i += 1;
    });
}
function deleteTask(title, index) {
    return __awaiter(this, void 0, void 0, function () {
        var apiUrl, data, response, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiUrl = "http://localhost:3000/deleteTaskByTitle?title=".concat(title);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    data = {
                        title: title
                    };
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: 'DELETE',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status: ".concat(response.status));
                    }
                    console.log(index);
                    removeTask(index * 1);
                    console.log('Data has been deleted successfully.');
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error('Error deleting data:', error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateTask(id, index) {
    return __awaiter(this, void 0, void 0, function () {
        var value, isDone, apiUrl, response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    value = document.getElementById('state_' + index);
                    alert(value.value);
                    isDone = false;
                    if (value.value === "on") {
                        alert(isDone);
                        isDone = true;
                    }
                    apiUrl = "http://localhost:3000/updateStateTask/".concat(id);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch(apiUrl, {
                            method: 'PUT',
                            body: JSON.stringify({ isDone: isDone }),
                            headers: {
                                'Content-Type': 'application/json',
                            },
                        })];
                case 2:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error("API request failed with status: ".concat(response.status));
                    }
                    console.log('Data has been deleted successfully.');
                    alert('update state task success!');
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error('Error deleting data:', error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function removeTask(index) {
    var taskList = document.getElementById('taskList');
    var taskItems = taskList.getElementsByTagName('li');
    if (index >= 0 && index < taskItems.length) {
        taskList.removeChild(taskItems[index]);
    }
    else {
        console.log('Chỉ mục không hợp lệ.');
    }
}
// Call the function to fetch data
fetchData();
