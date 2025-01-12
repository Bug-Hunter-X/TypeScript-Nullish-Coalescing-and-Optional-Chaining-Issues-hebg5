function printName(name: string | null): void {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log('Name is null');
  }
}

printName(null); // Works fine
printName('John'); // Works fine

// Solution: Use optional chaining (?.) and nullish coalescing (??) operators
const names: (string | null)[] = ['John', null, 'Jane'];
names.forEach(name => {
    console.log((name?.toUpperCase() ?? 'N/A'));
});