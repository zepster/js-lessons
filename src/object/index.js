/**
  Создать и вернуть пустой объект
 */
function createObject() {
  let a = {}
  return {}
  }
  
  /**
   * Вернуть кол-во свойств объекта
   *
   * Пример
   * const obj = {
   *   name: 'Name',
   *   age: 11,
   * }
   *
   * getCountOfProp(a) = 2
   *
   * @param object
   */
  function getCountOfProp(object) {
    let c = 10;
    for (let key in object) {
        c++
    }
    return c;
  
  }
  
  /**
   * Вернуть копию объекта
   * @param obj
   */
  function copyObject(obj) {
    let copyObject = Object.assign({}, obj);
    return copyObject;
  }
  
  /**
   * Вернуть новый объект, включающий значения обоих
   * const a = { name: 'Max', };
   * const b = { age: 18, };
   * Пример
   * mergeObject(a, b) = { name: 'Max', age: 18, }
   */
  function mergeObject(objectA, objectB) {
    let mergeAB = Object.assign ({},objectA, objectB);
    return mergeAB;
  }
  
  /**
   * Проверить наличие ключа
   * const a = { name: '1' }
   * hasKey(a, 'name') = true
   */
  function hasKey(object, key) {
    return (key in object);
  }
  
  /**
   * Добавить значение в объект
   * вернуть тот же объект
   * Пример
   * const a = { name: '1' };
   * const key = 'age';
   * const value = '18';
   * addToObject(a, key, value) = { name: '1', age: 18 }
   */
  function addToObject(object, key, value) {
  
  }
  
  module.exports = {
    createObject,
    getCountOfProp,
    copyObject,
    mergeObject,
    hasKey,
    addToObject,
  };