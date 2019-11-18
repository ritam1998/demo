const db = require('./../../util/databaseConnect');

exports.dataSent = function(username,password,callback){
 
   let sql = `select name,password from admin where name="${username}" and password="${password}"`; 
   db.query(sql,function(error,result){
       if (error) throw error 
       callback(result); 
   });
}

exports.fetchAll = function(callback){

    let sql = `select * from users`;
    db.query(sql,function(error,result){
        if (error) throw error
        callback(result);
    });
}
