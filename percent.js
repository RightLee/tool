/**
 * 数值--千分位   如: 1,999,999
*/

//1、非输入框

// 非输入框我们只需要对其展示进行处理，我们可以判断绑定元素的innerHTML是否不为空，不为空的话则直接对其innerHTML内容进行格式化
export default {
    bind: function (el, binding) {
        const separator = binding.value || ",";
        if (el.innerHTML) {
            el.innerHTML = addThousandSeparator(el.innerText, separator);
        }
    },
};

//2、输入框

//聚焦时
//只需要监听元素的聚焦(focus)事件即可，取到元素的值，将其分隔符去掉后重新赋值。
el.addEventListener("focus", (event) => {
    const value = event.target.value;
    event.target.value = deleteThousandSeparator(value, separator);
});

//失焦时
// 只需要监听元素的失焦(blur)事件即可，取到元素的值，对其进行添加分隔符处理后重新赋值。
el.addEventListener("blur", (event) => {
    const value = event.target.value;
    event.target.value = addThousandSeparator(value, separator);
});


//3、处理方法

//增加千分位分隔函数
function addThousandSeparator(num, separator = ",") {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
// num.toString(): 将输入的数字 num 转换为字符串，以便后续处理
// .replace(/\B(?=(\d{3})+(?!\d))/g, separator): 这里使用了正则表达式进行替换操作。具体解释如下：
// \B: 表示非单词边界，用于匹配不在单词边界处的位置
// (?=(\d{3})+(?!\d)): 使用正向预查来匹配每三位数字的位置，但不匹配末尾不足三位的数字
// (\d{3})+: 匹配连续的三位数字
// separator: 作为参数传入的分隔符，默认为 ,
// g: 表示全局匹配，即匹配所有满足条件的位置
// 通过正则表达式的替换功能，在数字字符串中的每三位数字之间插入指定的千位分隔符，从而实现千位分隔符的添加

function deleteThousandSeparator(numberString, separator = ",") {
    return numberString.replace(new RegExp(separator, "g"), "");
}


// complete code  --  完整代码

/* ===============================================================

function addThousandSeparator(num, separator = ",") {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);
}
function deleteThousandSeparator(numberString, separator = ",") {
    return numberString.replace(new RegExp(separator, "g"), "");
}
export default {
    bind: function (el, binding) {
        const separator = binding.value || ",";
        if (el.innerHTML) {
            el.innerHTML = addThousandSeparator(el.innerText, separator);
        }
        el.addEventListener("focus", (event) => {
            const value = event.target.value;
            event.target.value = deleteThousandSeparator(value, separator);
        });
        el.addEventListener("blur", (event) => {
            const value = event.target.value;
            event.target.value = addThousandSeparator(value, separator);
        });
    },
};

=================================================================== */
