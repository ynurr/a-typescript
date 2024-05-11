function 클리닝(x: (string | number)[]) {
    let result: number[] = [];
    
    x.forEach(a => {
        console.log('a:'+a);
        if (typeof a === 'string') {
            result.push(parseFloat(a));
        } else {
            result.push(a);
        }
    })

    return result;
}

console.log(클리닝([123,'5','231',221]));




let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function 담당과목(x: {subject: string | string[]}) {
    if (typeof x.subject === 'string') {
        return x.subject;
    } else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length-1];
    } else {
        return '없음';
    } 
}

console.log(담당과목({subject : ['english', 'art']}))