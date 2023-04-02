let allWriters = [];
function getAllWriters() {
  const allImgs = document.querySelectorAll("img");
  allImgs.forEach((element) => {
    allWriters.push(element["alt"].slice(9).toLowerCase());
  });
}
function searchWriter() {
  const writer = document.getElementById("searchBox").value.toLowerCase();
  const result = document.getElementById("searchResult");

  console.log(allWriters);
  allWriters.includes(writer)
    ? (result.innerHTML = `<p>This writer is in the list!</p>`)
    : (result.innerHTML = `<p>This writer is not in the list!</p>`);
  console.log(writer);
}
