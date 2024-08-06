export default function loadBalancer(chinaDownload, USDownload) {
  const returnPromise = Promise.race([chinaDownload, USDownload]);
  return returnPromise;
}
