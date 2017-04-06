var Member = require('./lib/Member.js')
var connect = require('camo').connect;
var config = require('./config.js');

/**
 * name
 * nickname
 * github
 * wechat
 * mobile
 * email
 * skillSets
 * bankCard
 * - cardNumber: String
 * - receiver: String
 * - bankAddress: String
 */

var database;

var main = async () => {
    
    database = await connect(config.dbPath)
    console.log(database);

    var info = {
        name: "万豪",
        nickname: "晓晨",
        github: "jobxiaoc",
        wechat: {
            id: "asd2244668800",
            name: "晓晨"
        },
        mobile: "15658001537",
        email: "jobxiaoc@gmail.com",
        skillSets: ['vue', 'react', 'frontend', '实现网'],
        bankCard: {
            cardNumber: '6214 8301 1554 2655',
            receiver: '万豪',
            bankAddress: '招商银行北京东三环支行'
        }
    }


    try {

        var memberList = await Member.find({}, {sort: '-createdDate'});
        if(memberList.length > 0){
            for(let i = 0; i < memberList.length; i ++) {
                console.log(memberList[i].toString());
            }
            console.log(`----------------------\nTotal Count Member: ${memberList.length}\n` )
        }
    } catch (e) {
        console.log(e);
    }

    await database.close();
    return console.log('Dadabase closed');
}



main();