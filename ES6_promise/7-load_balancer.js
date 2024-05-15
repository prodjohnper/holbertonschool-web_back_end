/*
    7-load_balancer.js

    Function that accepts two arguments and returns the
    value returned by the promise that resolved the first
*/

// Function that accepts two arguments
export default function loadBalancer(chinaDownload, USDownload) {
  // Return the value returned by the promise that resolved the first
  return Promise.race([chinaDownload, USDownload]);
}
