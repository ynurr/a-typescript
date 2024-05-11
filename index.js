function 클리닝(x) {
    var result = [];
    x.forEach(function (a) {
        console.log('a:' + a);
        if (typeof a === 'string') {
            result.push(parseFloat(a));
        }
        else {
            result.push(a);
        }
    });
    return result;
}
console.log(클리닝([123, '5', '231', 221]));
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 담당과목(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return '없음';
    }
}
console.log(담당과목({ subject: ['english', 'art'] }));
