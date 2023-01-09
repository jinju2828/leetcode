/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// const dp = [];

function wordBreak(s, wordDict) {
    // let j = 0;
    // for(i in wordDict) {
    //     // console.log(s.slice(i, ));
    //     // console.log(wordDict.includes(s[i]));
    //     // if(s[i])
    //     console.log(i);
    //     let dicLen = wordDict[i].length;
    //     // console.log(typeof dicLen);
    //     for(j ; j < s.length - dicLen + 1; j++) {
    //         console.log(s.slice(j,j+dicLen));
    //         if(wordDict[i].includes(s.slice(j,j+dicLen))) {
    //             console.log("true");
    //             j += dicLen
    //             break;
    //         }
    //     }

    // }
    // const dp = [];
    // for(let i = s.length - 1; i >= 0 ; i--) {
    //     console.log("i",i);
    //     for(j in wordDict) {
    //         let dictLen = wordDict[j].length;
    //         console.log("dicLen", wordDict[j]);
    //         console.log("sliced", s.slice(i, i+dictLen));
    //         console.log("is it", wordDict[j] === s.slice(i, i+dictLen));
    //         // if(dp[i] === undefined) {
    //             if(wordDict[j] === s.slice(i, i+dictLen)) {
    //             dp[i] = true;
    //             } else {
    //                 if(dp[i]) break;
    //                 dp[i] = false;
    //             }
    //         // }
    //         // console.log("dp", dp);
    //     }
    // }
    // // console.log("dp", dp);

    // // return dp[0];
    // const dp = [];
    // for(word of wordDict) {
    //     let wordLen = word.length;
    //     for(let i = s.length - 1; i >= 0 ; i--) {
    //         // for(let j = 0; j < i; j++) {
    //             console.log("word, i", word, i);
    //             console.log("slice", s.slice(i,i+wordLen));
    //             let sliced = s.slice(i,i+wordLen);
    //             let removed = s;
    //             if(sliced === word) {
    //                 removed = removed.slice(0, -i);
    //                 console.log("here", i, removed);
    //                 s = removed;
    //             }
    //             console.log("removed", s, removed);
    //         // if( s.slice(i,j) )
    //         // }

    //     }
    // }
    // return !s ? true : false;

    // const dp = [];
    // for(let i = s.length - 1; i >= 0 ; i--) {
    //     let removed = s;
    //     for(word of wordDict) {
    //          let wordLen = word.length;

    //         console.log("word, i, s", word, i, removed);

    //         let sliced = removed.slice(i,i+wordLen);
    //         console.log("slice", sliced);
    //         // let removed = s;
    //         if(sliced === word) {
    //             removed = removed.slice(0, i);
    //             console.log("here", i, removed);
    //             s = removed;
    //             }
    //             console.log("removed", s, removed);
    //     }
    // }
    // return !s ? true : false;

    const dp = new Array(s.length + 1).fill(false);
    // console.log(dp);
    dp[0] = true;

    for(let i = 1; i <= s.length; i ++) {
        // console.log('i updated to', i)
        for(let j = 0; j < i; j++) {
            // console.log(s.slice(j,i), wordDict.includes(s.slice(j, i)));
            if(dp[j] && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
            // console.log("here");
        }
    }

    return dp[s.length];
}
