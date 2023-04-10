import axios from "axios";

function getImages(query) {
  if (!query) {
    return Promise.resolve([]);
  } else {
    return axios
      .get(`https://images-api.nasa.gov/search?q=${query}`)
      .then((response) => {
        const arrayResults = response.data.collection.items;
        const imageResults = arrayResults.filter(
          (result) => result.data[0].media_type === "image"
        );
        return imageResults.map((image) => {
          return {
            url: image.links[0].href,
            alttext: image.data[0].title,
          };
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export { getImages };
