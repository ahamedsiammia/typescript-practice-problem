# TypeScript Practice Problems

এই repository-তে TypeScript-এর গুরুত্বপূর্ণ concepts নিয়ে 15টি practice problem দেওয়া হয়েছে।  
এখানে Generics, Utility Types, Enum, Tuple, Type Narrowing, Record, Intersection Types সহ বিভিন্ন TypeScript feature practice করা যাবে।

---

# 🚀 Problem List

---

# Problem 1 — Generic User Card

একটা generic type `UserCard<T>` তৈরি করো যেখানে থাকবে:

- `id`
- `data`

`data` dynamic হবে।

## Input

- student object
- admin object
- customer object

## Output

```ts
{
  id: ...,
  data: ...
}
```

---

# Problem 2 — Optional Profile Update

একটা `Profile` type বানাও যেখানে থাকবে:

- `name`
- `email`
- `age`

তারপর এমন function বানাও যেটা partial profile update নিতে পারবে।

## Input

- পুরো profile
- অথবা কিছু property

## Output

updated profile object

---

# Problem 3 — Pick Utility Practice

একটা `Product` interface বানাও:

- `id`
- `name`
- `price`
- `description`
- `stock`

তারপর শুধু:

- `name`
- `price`

নিয়ে নতুন type তৈরি করো।

## Input

full `Product` type

## Output

```ts
{
  name: string;
  price: number;
}
```

---

# Problem 4 — Omit Utility Practice

আগের `Product` type থেকেই এমন type তৈরি করো যেখানে:

- `description`
- `stock`

থাকবে না।

## Input

full `Product` type

## Output

```ts
{
  id: number;
  name: string;
  price: number;
}
```

---

# Problem 5 — Generic Array Function

একটা generic function বানাও যেটা যেকোনো value নিয়ে array return করবে।

## Input

```ts
"hello"
123
{name:"siam"}
```

## Output

```ts
["hello"]
[123]
[{name:"siam"}]
```

---

# Problem 6 — Constraint Practice

একটা generic function বানাও যেটা শুধু এমন object নিবে যার মধ্যে:

```ts
name: string
```

থাকবে।

## Input

### Valid

```ts
{name:"siam",age:22}
```

### Invalid

```ts
{age:22}
```

## Output

- valid object accept হবে
- invalid object error দিবে

---

# Problem 7 — Tuple Practice

একটা tuple বানাও যেখানে থাকবে:

- name
- age
- premium status

## Input

```ts
["siam",22,true]
```

## Output

valid tuple

Wrong order দিলে error

---

# Problem 8 — Enum Practice

একটা enum বানাও:

- Pending
- Success
- Failed

তারপর status অনুযায়ী message return করো।

## Input

```ts
Status.Pending
```

## Output

```ts
"Request Pending"
```

---

# Problem 9 — Intersection Type

দুইটা type বানাও:

## BasicInfo

- name
- age

## ContactInfo

- email
- phone

তারপর combine করে `FullUser` বানাও।

## Input

দুই type-এর property

## Output

```ts
{
 name:string;
 age:number;
 email:string;
 phone:string;
}
```

---

# Problem 10 — Nullish Coalescing

একটা function বানাও যেটা username নিবে।

যদি username:

- `null`
- `undefined`

হয় তাহলে `"Guest"` return করবে।

## Input

```ts
null
undefined
"siam"
```

## Output

```ts
"Guest"
"Guest"
"siam"
```

---

# Problem 11 — Unknown vs Any

দুইটা variable বানাও:

- `any`
- `unknown`

তারপর method call করে difference observe করো।

## Input

```ts
any
unknown
```

## Output

- any freely access দিবে
- unknown আগে type narrowing চাইবে

---

# Problem 12 — Type Narrowing

একটা function বানাও যেটা:

- `string`
- `number`

দুইটাই নিতে পারবে।

## Input

```ts
"hello"
5
```

## Output

```ts
"HELLO"
25
```

---

# Problem 13 — Readonly Practice

একটা readonly user type বানাও।

## Input

readonly object

## Output

property change করতে গেলে error

---

# Problem 14 — Record Utility

`Record` use করে এমন object type বানাও যেখানে:

- key = subject
- value = number

## Input

```ts
{
 math:90,
 english:85
}
```

## Output

valid Record object

---

# Problem 15 — Generic Interface

একটা generic interface বানাও:

```ts
ApiResponse<T>
```

যেখানে থাকবে:

- `success`
- `data`

## Input

- user data
- product data

## Output

```ts
{
 success:true,
 data:...
}
```

---

# 🛠 Topics Covered

- Generics
- Utility Types
- Pick & Omit
- Record
- Enum
- Tuple
- Type Narrowing
- Unknown vs Any
- Readonly
- Intersection Types
- Nullish Coalescing

---

# 👨‍💻 Author

**Name:** Your Name  
**Technology:** TypeScript

---