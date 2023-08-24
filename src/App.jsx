import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [merged, setMerged] = useState([]);
  const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const n = arr1.length;
const m = arr2.length;

  const nextGap = (gap) => {
    // It returns the ceil value of gap/2 or 0 if gap is 1.
    if (gap <= 1) {
      return 0;
    }
    return Math.floor(gap / 2) + (gap % 2);
  };

  const merge = (arr1, arr2, n, m) => {
    let i, j, gap = n + m;

    for (gap = nextGap(gap); gap > 0; gap = nextGap(gap)) {
      // Comparing elements in the first array itself with difference in
      // index equal to the value of gap.
      for (i = 0; i + gap < n; i++) {
        // If element at ith index is greater than element at
        // (i+gap)th index, we swap them.
        if (arr1[i] > arr1[i + gap]) {
          [arr1[i], arr1[i + gap]] = [arr1[i + gap], arr1[i]];
        }
      }

      if (gap > n) {
        j = gap - n;
      } else {
        j = 0;
      }

      // Now comparing elements in both arrays with help of two pointers.
      // The loop stops whenever any pointer exceeds the size of its array.
      for (; i < n && j < m; i++, j++) {
        // If element in the first array is greater than element in
        // second array, we swap them.
        if (arr1[i] > arr2[j]) {
          [arr1[i], arr2[j]] = [arr2[j], arr1[i]];
        }
      }

      if (j < m) {
        // At last, comparing elements in the second array itself with
        // difference in index equal to the value of gap.
        for (j = 0; j + gap < m; j++) {
          // If element at jth index is greater than element at
          // (j+gap)th index, we swap them.
          if (arr2[j] > arr2[j + gap]) {
            [arr2[j], arr2[j + gap]] = [arr2[j + gap], arr2[j]];
          }
        }
      }
    }
    setMerged(arr1.concat(arr2));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => merge(arr1, arr2, n, m)}>
          merge arrays
        </button>
       <h3>array 1 is: {arr1}</h3>
       <h3>array 2 is: {arr2}</h3>
        <h3>merged array is: {merged}</h3>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

