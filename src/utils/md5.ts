import md5 from 'md5';

export class Md5 {
    static hash(str: string): string {
        return md5(str);
    }
}