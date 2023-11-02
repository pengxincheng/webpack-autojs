const { waitTime } = require("../../common/common");
const common = require("../../common/common");
const { getXY } = require("../../common/ocrUtils");
const ocrUtils = require("../../common/ocrUtils");

common.openApp("i茅台");

common.waitTime(5);

//申请截屏权限
// if (!requestScreenCapture()) {
//     toast("请求截图失败");
//     exit()
// }


common.waitTime(1);

var x = 0;
var y = 0;
var flag = true;


var result = ocrUtils.getXY("预约申购")

x = result.x;
y = result.y;

common.waitTime(5);

click(x, y);



