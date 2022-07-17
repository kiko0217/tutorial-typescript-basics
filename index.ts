import * as _ from 'lodash'

async function hello() {
    return 'world'
}

// const url = new URL('...')

let lucky;
lucky = '23'

type TestType = string;

let testType: TestType = "test";


type Style = 'bold' | 'italid' | 23;

let font:Style = 23;

interface Person {
    first: string
    last: string
    [key: string]: any
}


const person:Person = {
    first: 'jeff',
    last: 'delaney',
    fast: true
}

function pow(x:number, y:number): string {
    return Math.pow(x, y).toString()
}

type MyList = [number?, string?, boolean?]

let arr:MyList;
arr.push(1)
arr.push("test")
arr.push(false)

