//! NOT YET STABLE, DO NOT USE

// import { exit } from "process";
// import { L } from "../log/log";


// class Test {
//     #test_name: string;
//     #test_function: Function;
//     #expected_result: any;
//     constructor(name: string, f: Function, expected: any ) {
//         this.#test_name = name;
//         this.#test_function = f;
//         this.#expected_result = expected;
//     }

//     public get passed(): boolean {
//         return this.run().passed;
//     }

//     public get name(): string {
//         return this.#test_name;
//     }

//     public run(): RanTest {
//         return new RanTest(this.#test_name, this.#test_function, this.#expected_result, this.#test_function());
//     }
// }

// class RanTest {
//     #test_name: string;
//     #test_function: Function;
//     #expected_result: any;
//     #outcome: any;
//     #passed: boolean;
//     constructor(name: string, f: Function, expected: any, outcome: any ) {
//         this.#test_name = name;
//         this.#test_function = f;
//         this.#expected_result = expected;
//         this.#outcome = outcome;
//         this.#passed = this.#expected_result == this.#outcome;
//     }

//     public get passed(): boolean {
//         return this.#passed;
//     }

//     public get name(): string {
//         return this.#test_name;
//     }

//     public rerun(): RanTest {
//         return new RanTest(this.#test_name, this.#test_function, this.#expected_result, this.#test_function());
//     }
// }

// export namespace _Test {


//     export function test(func: Function): Test {
//         return new Test(func.name, func, true)
//     }

//     export function assert$(func: Function, auto_panic: boolean = true): void {
//         const test = (new Test(func.name, func, true)).run();
//         if(test.passed){
//             L._debug$(`${test.name} passed!`);
//         } else {
//             L._error$(`${test.name} failed!`);
//             if(auto_panic) {
//                 exit(1);
//             }
//         }
//     }
    
//     export function assert_eq$(func: Function, func2: Function, auto_panic: boolean = true): void {
//         const test = new Test(func.name, func, func2());
//         if(test.run()){
//             L._debug$(`${test.name} is equal to ${func2.name}`);
//         } else {
//             L._error$(`${test.name} is not equal to ${func2.name}`);
//             if(auto_panic) {
//                 exit(1);
//             }
//         }
//     }
    
//     export function assert_neq$(func: Function, func2: Function, auto_panic: boolean = true): void {
//         const test = new Test(func.name, func, func2());
//         if(!test.run()){
//             L._debug$(`${test.name} is not equal to ${func2.name}`);
//         } else {
//             L._error$(`${test.name} is equal to ${func2.name}`);
//             if(auto_panic) {
//                 exit(1);
//             }
//         }
//     }
// }
