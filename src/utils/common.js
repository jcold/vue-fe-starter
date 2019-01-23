export default {
    isEqualPlainJson(obj1, obj2) {
        var flag = true;
        if (Object.keys(obj1).length == Object.keys(obj2).length) {
            for (var key in obj1) {
                if (obj1[key] == obj2[key]) {
                    continue;
                } else {
                    flag = false;
                    break;
                }
            }
        } else {
            flag = false;
        }
        return flag
    },
    formatDateTime(inputTime) {
        var date = new Date(inputTime);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        m = m < 10 ? "0" + m : m;
        var d = date.getDate();
        d = d < 10 ? "0" + d : d;
        var h = date.getHours();
        h = h < 10 ? "0" + h : h;
        var minute = date.getMinutes();
        var second = date.getSeconds();
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    },
}