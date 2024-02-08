const findLongestCommonPrefix = (str) => {
    let regx = RegExp(/^(?!.{201})([a-z]+$)?/g);
    // เช็ค value size ของ str ต้องมากกว่า 0 และต้องไม่เกิน 200
    // เช็ค value ใน array value น้อยกว่า หรือเท่ากับ 200 char
    // value ต้องเป็นตัวพิมพ์เล็กทั้งหมด
    const validate = str.length > 0 && str.length <= 200 && str.map(v => regx.test(v));

    if (!validate) {
        return "";
    }

    //เตรียมคำชุดแรก เพื่อไปเทียบค่าคำนำหน้าตัวต่อๆไป
    let prefix = str[0];

    for (let i = 1; i < str.length; i++) {
        //เอาไว้เลื่อนตัวอักษร จาก n-n char ที่ตัวอักษรตรงกัน
        //เริ่มต้นที่ตัวอักษรแรก
        let j = 0;
        
        // J ต้องไม่น้อยกว่า prefix และ J ก็ ต้องไม่น้อยกว่า str[i] และ ตัวอักษรของ prefix และ str[i] ต้องตรงกัน
        while (j < prefix.length && j < str[i].length && prefix[j] === str[i][j]) {
            j++;
        }
        // เอาอักษรทุกตัวที่เทียบค่าได้
        prefix = prefix.slice(0, j);
    }
    return prefix;
}

let items1 = ["flow", "flowers", "flow"];
let items2 = ["dog", "cat", "bat"];
let commonPrefix = findLongestCommonPrefix(items2);
console.log(commonPrefix)