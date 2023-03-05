interface SStorage<T> {
    [key: string]: T;
}

class LocalStorage<T> {
    private storage: SStorage<T> = {};
    set(key: string, value: T) {
        this.storage[key] = value;
        console.log(`set ${key}: ${this.storage[key]}`);
    }
    get(key: string) {
        return this.storage[key];
    }
    remove(key: string) {
        delete this.storage[key];
    }
    clear() {
        this.storage = {};
    }
}

const stringData = new LocalStorage<string>();

stringData.set("first", "data");
stringData.set("second", "data2");
console.log(stringData.get("first"));
stringData.remove("first");
console.log(stringData);
stringData.clear();
console.log(stringData);
