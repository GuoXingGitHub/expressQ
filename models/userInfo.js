/**
 * Created by ���º�ҩ on 2016/2/2 0002.
 * ���ݿ�ģ��ʵ��
 */
module.exports = function (db, cb) {
    db.define('userinfo', {
        id:Number,
        age:Number,
        name : String
    });
    return cb();
};