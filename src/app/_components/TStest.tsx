const age: number = 20;
console.log(age);

//   const name: string = "John";
//   console.log(name);

const prices: Array<number> = [1000, 2000, 3500];
console.log(prices);

const animals: Array<string> = ["cat", "dog", "mouse"];
console.log(animals);

interface Person {
  name: string;
  age: number;
  isStudent: boolean;
}

const personA: Person = {
  name: "John",
  age: 20,
  isStudent: true,
};

console.log(personA);

type Student = {
  name: string;
  age: number;
  isStudent: boolean;
};

const group: Array<Student> = [
  {
    name: "dorj",
    age: 20,
    isStudent: true,
  },
  {
    name: "dulmaa",
    age: 20,
    isStudent: true,
  },
];

console.log(group);

//   export default function Home() {
//     const haha = (param: number): void => {
//       console.log(param * 2);
//     };

//     return (
//       <div>
//         <button onClick={() => haha(30)}>Click me</button>
//       </div>
//     );
//   }
