module.exports = {
    /**
     * this method is to check the each property of the given object is undefined
     * @param list {Object} 
     * @returns emptyArr {Array} the empty keys
     */
    checkEmpty: (list) => {
        const emptyArr = [];
        const keys = Object.keys(list);
        keys.forEach(item => {
            const keys = Object.keys(list);
            if (list[item] === undefined) {
                emptyArr.push(item);
            }
        });
        return emptyArr;
    }
}