
declare global {
    interface Set<T> {
        map<K>(callbackFn: (elem:T) => K):K[];
    }
}

if (!Set.prototype.map) {
    Set.prototype.map = function<T,K>(this: Set<T>, callbackFn:(elem:T) => K) {
        const result:K[] = [];
        this.forEach((elem:T) => {
            result.push(callbackFn(elem))
        })
        return result;
    }
}

export {}