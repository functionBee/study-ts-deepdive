"use strict";
// ���� Ÿ���� ���� �� ����
// function logText(text){
//     console.log(text);
//     return text;
// }
// logText(10);
// logText('hi');
// logText(true);
// Generic
// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('hi');
// function logText(text: string | number){
//     console.log(text);
//     // text.
//     // ����1.
//     // string �� number�� ������
//     // �������� �ۼ������� api �� ���ؼ��� �ڵ� �ϼ�(preview)�� ����
//     return text;
// }
// const a = logText('a');
// a.split('');
// // ����2. 
// // ��Ȯ�ϰ� a ������ string �̶�� Ÿ���� �߷��� �Ұ����Ͽ� ������ �߻�
function logText(text) {
    console.log(text);
    return text;
}
const str = logText('a');
str.split('');
// ����1. 
// Ÿ���� ������ ����
const login = logText(true);
const object = { value: 'sw', selected: false };
// ���׸��� Ÿ�� ����
function logTextLength(text) {
    text.forEach(function (text) {
        console.log(text);
    });
    return text;
}
logTextLength(['hi', 'abc']);
function textLength(text) {
    text.length;
    return text;
}
textLength('a');
// textLength(10);
textLength({ length: 10 });
// extedns?  ������ ���ǵǾ� �ִ� �������̽� Ȥ�� Ÿ���� Ȯ���� �� ���� Ű����
function getShoppingOption(itemOption) {
    return itemOption;
}
// getShoppingOption(10);
// getShoppingOption<string>('a');
getShoppingOption('name');
