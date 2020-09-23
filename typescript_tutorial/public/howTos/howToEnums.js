"use strict";
/* ENUMS: allows to store a set of constants or keywords and associate them with numeric values  */
var DataType;
(function (DataType) {
    DataType[DataType["BOOK"] = 0] = "BOOK";
    DataType[DataType["AUTHOR"] = 1] = "AUTHOR";
    DataType[DataType["FILM"] = 2] = "FILM";
    DataType[DataType["DIRECTOR"] = 3] = "DIRECTOR";
    DataType[DataType["PERSON"] = 4] = "PERSON";
})(DataType || (DataType = {}));
const doc_6 = {
    uid: 6,
    dataType: DataType.BOOK,
    data: 'the hobbit'
};
const doc_7 = {
    uid: 7,
    dataType: DataType.PERSON,
    data: { name: 'Anna', age: 21 }
};
console.log(doc_6, doc_7);
