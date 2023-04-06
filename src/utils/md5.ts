import md5 from 'md5';

export default class Md5 {
    public hash(str: string): string {
        return md5(str);
    }
}