function sumOfDistinctElements(set1, set2) {
  const distinctElements = [];
  let sum = 0;

  for (const element of set1) {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
      sum += element;
    }
  }

  for (const element of set2) {
    if (!distinctElements.includes(element)) {
      distinctElements.push(element);
      sum += element;
    }
  }

  return sum;
}

// Example usage:
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log("Sum of distinct elements:", result);
