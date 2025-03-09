// Вам потрібно написати функцію, яка як параметр приймає функцію і додає їй можливість кешувати дзвінки. 
// Ідея полягає в тому, що при виклику функції з однаковими аргументами немає сенсу викликати функцію щоразу, 
// достатньо зберігати дані про результати виклику.
// Зберігати потрібно останні 10 дзвінків.

function cacheFunction(func) {
    const cache = new Map();
    const cacheQueue = [];
    const cacheSize = 10;

    function getCache() {
        return Array.from(cache.keys());
    }

    function phoneCacheFunction(phoneNumber) {
        if (cache.has(phoneNumber)) {
            console.log("Cache hit:", phoneNumber);
            return cache.get(phoneNumber);
        }

        const result = func(phoneNumber);
        cache.set(phoneNumber, result);
        cacheQueue.push(phoneNumber);

        if (cacheQueue.length > cacheSize) {
            const oldestKey = cacheQueue.shift();
            cache.delete(oldestKey);
            console.log("Removed from cache:", oldestKey);
        }

        console.log("Current cache:", getCache());
        return result;
    }
    
    phoneCacheFunction.getCache = getCache;
    return phoneCacheFunction;
}

function callNumber(phoneNumber) {
    return `Connected to ${phoneNumber}`;
}

const cachedCallNumber = cacheFunction(callNumber);

console.log(cachedCallNumber("+1111111111")); // number 1
console.log(cachedCallNumber("+2222222222")); // number 2
console.log(cachedCallNumber("+1111111111")); // number 3
console.log(cachedCallNumber("+3333333333")); // number 4
console.log(cachedCallNumber("+4444444444")); // number 5
console.log(cachedCallNumber("+5555555555")); // number 6
console.log(cachedCallNumber("+6666666666")); // number 7
console.log(cachedCallNumber("+7777777777")); // number 8
console.log(cachedCallNumber("+8888888888")); // number 9
console.log(cachedCallNumber("+9999999999")); // number 10
console.log(cachedCallNumber("+1111100000")); // number 11
console.log(cachedCallNumber("+1234567890")); // number 12

console.log("Final cache:", cachedCallNumber.getCache());
