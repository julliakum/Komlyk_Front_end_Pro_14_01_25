// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
function removeElement(array, item) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === item) {
            array.splice(i, 1);
        }
    }
}

const array = [1, 2, 3, 4, 5, 5, 6, 7];
removeElement(array, 5);

console.log(array);