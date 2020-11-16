const Tab = require('./LinearHashTable.js');

class HT_Dictionary {
    constructor() {
        this._HT = new Tab.LinearHashTable();
    }
    findElement(key) {
        return this._HT.findElement(key);
    }
    insertItem(key, elem) {
        return this._HT.insertItem(key, elem);
    }
    removeElement(key) {
        return this._HT.removeElement(key);
    }
    size() {
        return this._HT.size();
    }
    isEmpty() {
        return this._HT.isEmpty();
    }
    items() {
        return this._HT.items();
    }
    keys() {
        return this._HT.keys();
    }
    elements() {
        return this._HT.elements();
    }
    print() {
        return this._HT.print();
    }
}

exports.HT_Dictionary = HT_Dictionary;
