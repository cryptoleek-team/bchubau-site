const moment = require("moment");

exports.formatDate = (date)=> moment(date).format('YYYY/MM/DD HH:mm a');

exports.getDuaration =(start,end)=>moment(end,'DD-MM-YYYY hh:mm:ss').diff(moment(start,'DD-MM-YYYY hh:mm:ss'),'hours');