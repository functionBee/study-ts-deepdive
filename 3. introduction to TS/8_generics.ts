
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



function logText<T>(text: T):T { // ���ڿ� ��ȯ���� �����ϵ��� ���׸��� �̿�
    console.log(text);
    return text;
}

const str = logText<string>('a');
str.split('');

// ����1. 
// Ÿ���� ������ ����

const login = logText<boolean>(true);
// ����2. 
// login ������ boolean Ÿ������ �߷� ����


// interface Dropdown{
//     value: string;
//     selected : boolean;
// }

// const object: Dropdown = { value: 'sw', selected :  false };

// �������̽��� ���׸��� �����ϴ� ���
interface Dropdown<T>{
    value: T;
    selected : boolean;
}

const object: Dropdown<string> = { value: 'sw', selected :  false };

// ���׸��� Ÿ�� ����
function logTextLength<T>(text: T[]): T[] {
    text.forEach(function(text){
        console.log(text);
    })
    return text;
}

logTextLength<string>(['hi', 'abc']);

interface LengthType{
    length: number;
}

function textLength<T extends LengthType>(text: T):T{
    text.length;
    return text;
}

textLength('a');
// textLength(10);
textLength({length : 10});


