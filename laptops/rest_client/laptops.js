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

export const saveLaptopRest = (laptop, fnShowMessage) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      marca: laptop.brand,
      procesador: laptop.processor,
      memoria: laptop.memory,
      disco: laptop.disk,
    }),
  };

  fetch(URL + "laptops", config)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al guardar la laptop");
      }
      return response.json();
    })
    .then((body) => {
      fnShowMessage();
      console.log("Laptop guardada:", body);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
};

export const updateLaptopRest = (laptop, fnShowMessage) => {
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: laptop.id,
      marca: laptop.brand,
      procesador: laptop.processor,
      memoria: laptop.memory,
      disco: laptop.disk,
    }),
  };

  fetch(URL + "laptops/" + laptop.id, config)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al actualizar la laptop");
      }
      return response.json();
    })
    .then((body) => {
      fnShowMessage();
      console.log("Laptop actualizada:", body);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
};

// NUEVO: Función para eliminar una laptop
export const deleteLaptopRest = (id, fnShowMessage) => {
  const config = {
    method: "DELETE",
  };

  fetch(URL + "laptops/" + id, config)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al eliminar la laptop");
      }
      return response.json();
    })
    .then((body) => {
      fnShowMessage();
      console.log("Laptop eliminada:", body);
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
};
