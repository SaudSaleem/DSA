// To check if array is sorted or not
function isSorted(a) {
  let i = 0;
  while (i < a.length - 1) {
    if (a[i] > a[i + 1]) {
      return false;
    }
    i++;
  }

  return true;
}

// To generate permutation of the array
function shuffle(a) {
  for (let i = 0; i < a.length - 1; i++) {
    let j = Math.floor(Math.random() * (a.length - (i + 1))) + (i + 1);
    let temp = a[j];
    a[j] = a[i];
    a[i] = temp;
  }
  console.log("a", a);
}

function bogosort(a) {
  // if array is not sorted then shuffle
  // the array again

  while (true) {
    let sorted = isSorted(a);
    if (sorted) break;
    shuffle(a);
  }
}

// prints the array
function printArray(a) {
  for (let i = 0; i < a.length; i++) console.log("%d ", a[i]);
  console.log("\n");
}
let a = [3, 2, 5, 1, 0, 4];

bogosort(a);
console.log("Sorted array :\n");
printArray(a);
