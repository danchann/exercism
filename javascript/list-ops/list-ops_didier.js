class List {
    constructor(values) {
        this.values = [];
        if(values) {
            for (var e of values) {
                this.values.push(e);
            }
        }
    }
    append(list) {
        for (var e of list.values) {
            this.values.push(e);
        }
        return this;
    }
    concat(l) {
        this.append(l);
        return this;
    }
    filter(c) {
        var res = [];
        for(var e of this.values) {
            if(c(e)) {
                res.push(e);
            }
        }
        return new List(res);
    }
    length() {
        return this.values.length;
    }
    map(c) {
        var res = [];
        for(var e of this.values) {
            res.push(c(e));
        }
        return new List(res);
    }
    foldl(c, n) {
        for(var i = 0;i<this.values.length;i++) {
            n=c(this.values[i], n);
        }
        return n;
    }
    foldr(c, n) {
        for(var i = this.values.length-1;i>=0;i--) {
            n=c(this.values[i], n);
        }
        return n;
    }
    reverse() {
        var res = [];
        for(var i = this.values.length-1;i>=0;i--) {
            res.push(this.values[i]);
        }
        return new List(res);
    }
}

module.exports = List;