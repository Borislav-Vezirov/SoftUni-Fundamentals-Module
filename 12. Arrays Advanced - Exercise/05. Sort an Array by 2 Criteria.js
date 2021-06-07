function practice(param) {
    param.sort(twoCriteriaSort);
    param.forEach(el => console.log(el));

    function twoCriteriaSort(cur, next) {
        if (cur.length === next.length) {
            return cur.localeCompare(next);
        }
        return cur.length - next.length;
    }
}
practice(["Isacc", "Theodor", "Jack", "Harrison", "George"]);