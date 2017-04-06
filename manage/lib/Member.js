'use strict';

var Document = require('camo').Document;

console.log('in member')

/**
 * name
 * nickname
 * github
 * wechat
 * mobile
 * email
 * skillSets
 * 
 * bankCard
 * - cardNumber: String
 * - receiver: String
 * - bankAddress: String
 * inviteCode
 * role
 * 
 */

module.exports = class Member extends Document {
    constructor() {
        super();

        this.name = {
            type: String,
        };

        this.nickname = {
            type: String
        }

        this.role = String;

        this.inviteCode = String;

        this.github = {
            type: String,
        }

        this.resume = {
            type: String,
            default: ''
        }

        this.wechat = {
            name: {
                type: String,
            },
            id: {
                type: String,
            }
        }

        this.mobile = String;

        this.email = String;

        this.skillSets = [String]

        this.bankCard = {
            cardNumber: String,
            receiver: String,
            bankAddress: String
        }

        this.createdDate = {
            type: Date,
            default: Date.now
        }
        // Schema declaration here...

    }

    toString() {
        return `
            ---------------------------------
            Name: ${this.name} (${this.nickname})\n
            inviteCode: ${this.inviteCode}
            Github: ${this.github}
            WechatName: ${this.wechat.name} | ${this.wechat.id}
            WechatID: ${this.wechat.id}
            Cellphone: ${this.mobile}
            Email: ${this.email}
            createdBy: ${new Date(this.createdDate).toISOString()}
            bank: ${this.bankCard.receiver} | ${this.bankCard.cardNumber} | ${this.bankCard.bankAddress}
            `
    }

}

