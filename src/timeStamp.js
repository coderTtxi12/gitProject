

function timeStampCallBack(type, callback) {

    let time = Date.now();

    var data = {
        'type': type,
        'timeStamp': time
    }

    if (type === 'time') {

        callback(data);
    }

}




timeStampCallBack('time', (time) => {

    setTimeout(() => {

        console.log(time.timeStamp);

        console.log(time.type);


    }, 5000);


})