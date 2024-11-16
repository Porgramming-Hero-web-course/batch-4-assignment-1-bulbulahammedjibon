The significance of union and intersection types in Typescript 
---------------------------------------------------------------

TypeScript has two type. Union type and Intersection type . Union type allow a variable to hold value of multiple types. Union types are use when a value can be more than a single type. We use the vertical bar (|) to separate each type.
Benefits of Union Types-
conditional types checking - we can use type guards to check specific type.
Flexiable Function argument
we can give function arguments different types .

Intersection Types

An intersection type is a type that merges several types into one type. This allows you to combine many types to create a single type with all of the properties that you want.

Benefits of Intersection Types:
Enhance type safety - we can combine types ensure that objects conform to specific constraints.it is help prevent type error and improve code readability.
