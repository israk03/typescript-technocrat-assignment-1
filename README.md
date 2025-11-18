
# TypeScript Interview Questions (Bangla) 

---

## 1. What are some differences between interfaces and types in TypeScript?

**উত্তর:**  
- **Interface** শুধুমাত্র অবজেক্টের কাঠামো সংজ্ঞায়িত করে, আর **Type** বিভিন্ন ধরনের টাইপ সংজ্ঞায়িত করতে পারে, যেমন প্রিমিটিভ, ইউনিয়ন, টুপল ইত্যাদি।  
- Interface একাধিকবার declare করা যায় এবং extend করা যায়। Type একবার declare হলে পুনরায় declare করা যায় না, তবে union বা intersection দিয়ে combine করা যায়।  
- Interface মূলত OOP-এর সাথে বেশি ব্যবহারযোগ্য এবং class implement করতে সহজ।

**উদাহরণ:**

```ts
interface Person {
  name: string;
  age: number;
}

type ID = string | number;
````

---

## 2. What is the use of the keyof keyword in TypeScript? Provide an example.

**উত্তর:**

* `keyof` ব্যবহার করে আমরা কোনো object type-এর **সমস্ত key-এর union type** পেতে পারি।
* এটি generic type-এ খুব কাজে আসে যখন key-এর সীমাবদ্ধতা নির্ধারণ করতে হয়।

**উদাহরণ:**

```ts
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const p = { name: "Rakib", age: 25 };
console.log(getProperty(p, "name")); // Output: Rakib
```

---

