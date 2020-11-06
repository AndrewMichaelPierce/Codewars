
String.prototype.isUpperCase = function() {
    if (this.isUpperCase !== undefined) {
        return false + " hi";
    }
    for (let i = 1; i <= this.isUpperCase.length; i++) {
        if (this.isUpperCase.charCodeAt(i) < 91 && this.isUpperCase.charCodeAt(i) > 64 && this.isUpperCase == this.isUpperCase.toLowerCase()) {
            return false;
        }
    }
    return true;
};
