/* ENUMS: allows to store a set of constants or keywords and associate them with numeric values  */

enum DataType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }

interface Data<T> {
  uid: number;
  //DataType: number; // the nuber specifies the Data type (e.g. 1 === book, 2 === person etc.), but this might be hard to maintain with big data -> use enum
  dataType: DataType // must be the enum
  data: T;
}

const doc_6: Data<string> = {
  uid: 6,
  dataType: DataType.BOOK, // === 0 (BOOK is index 0)
  data: 'the hobbit'
};

const doc_7: Data<object> = {
  uid: 7,
  dataType: DataType.PERSON, // === 4 (PERSON is index 4)
  data: { name: 'Anna', age: 21 }
};

console.log(doc_6, doc_7);