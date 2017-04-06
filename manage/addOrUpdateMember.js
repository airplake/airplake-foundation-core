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
        name: "贾龙飞",
        nickname: "贾龙飞",
        github: "fly2yu",
        wechat: {
            id: "jialong_fei",
            name: 'jeff'
        },
        mobile: "13611597651",
        email: " 13611597651@126.com",
        skillSets: ['node', 'backend', '实现网'],
        resume: '',
        bankCard: {
            cardNumber: '',
            receiver: '',
            bankAddress: ''
        }
    }


    try {

        var member = await Member.findOneAndUpdate({nickname: info.nickname}, info, {upsert: true});
        if(member){
            console.log(member.toString());
        }
    } catch (e) {
        console.log(e);
    }

    await database.close();
    return console.log('Dadabase closed');
}



main();