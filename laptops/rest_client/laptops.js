const IP = "192.168.100.79";
const PORT = 3003;
const URL = "http://" + IP + ":" + PORT + "/";

export const getAllLaptops = (fnRefreshList) => {
  console.log("getAllLaptops");

  fetch(URL + "laptops")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al obtener las laptops");
      }
      return response.json();
    })
    .then((body) => {
      console.log(body);
      fnRefreshList(body);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
};
