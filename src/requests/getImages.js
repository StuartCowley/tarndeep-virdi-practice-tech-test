import axios from "axios";

function getImages(query) {
  if (!query) {
    return Promise.resolve([]);
  }
}

module.exports = { getImages };
