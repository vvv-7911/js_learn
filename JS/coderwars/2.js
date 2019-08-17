// 140  likes
// 喜欢的人 [] "no one likes this"
// ["Peter"] "Perter likes this"
// ["Jacob","Alex"] "Jacob and Alex like this"
// ["Max", "John", "Mark"] "Max, John and Mark like this" 
// ["Alex", "Jacob", "Mark", "Max"] "Alex 
// Jacob and 2 others like this"

const likes = names => {
    const templates = [
        'no one likes this',
        '{name} likes this',
        '{name} and {name} like this',
        '{name},{name} and {name} like this',
        '{name}, {name} and {n} others like this'
    ];
    let idx =Math.min(names.length, 4); //哪一个模式
    return templates[idx].replace(/{name}|{n}/g, function(val){
        // console.log(val);
        return  val == '{name}' ? names.shift() : names.length;
    });

    // switch(names.length) {
    //     case 0: return 'no one likes this'
    //             break;
    //     case 1: return names[0] + 'likes this'
    //             break;
    //     case 2: return names[0] + 'and' + names[1] + 'likes this'
    //             break;
    //     case 3: return names[0] + names[1] + 'and' + names[2] + 'like this'
    //             break;
    //     case 4: return names[0] + names[1] + 'and 2 other like this'
    //             break;
    // }
}
console.log(likes(["Alex","Mark","Sik", "Timo", "nuna"]));
// // 顺序思维  数学思维
// 4 种可能 likes 的模式？
// phone number 1种模式里的匹配  name   names[i]