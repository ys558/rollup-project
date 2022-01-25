import { version } from '../package.json';
import { foo as test } from './foo'

export default function () {
  console.log('version ' + version);
}

export class A {
    constructor(param) {
        this.param = param
    }
}

test()