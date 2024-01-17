function getData(uId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Fetched the data!");
      resolve("skc@gmail.com");
    }, 4000);
  });
}

console.log("start");

async function fetchData() {
  try {
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();

console.log("end");
