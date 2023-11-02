const common = require("./common.js");
var ocrUtils = {};


ocrUtils.getXY = function (keyWord) {


    toastLog(keyWord)

    //申请截屏权限
    if (!requestScreenCapture()) {
        toast("请求截图失败");
        exit()
    }


    toastLog(keyWord)
    common.waitTime(5);

    var x = 0;
    var y = 0;

    var img = images.captureScreen();

    let res = paddle.ocr(img);
    res.forEach(item => {
        if (item.text === keyWord) {
            toastLog(JSON.stringify(item))

            x = (item.bounds.left + item.bounds.right) / 2
            y = (item.bounds.bottom + item.bounds.top) / 2
            flag = false;
        }
    });

    var result = {};

    
    result.x = x;
    result.y = y;

    

    return result;

}


module.exports = ocrUtils;