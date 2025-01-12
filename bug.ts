function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

printName(null); // Works fine
printName('John'); // Works fine

// This will throw an error because the 'name' parameter might be null and the toUpperCase() method call might cause an error
const names: (string | null)[] = ['John', null, 'Jane'];
names.forEach(name => {
    console.log(name.toUpperCase());
});