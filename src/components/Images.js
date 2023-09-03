import axios from "axios";
import { useEffect, useState } from "react";
import config from "./contant";

function Images() {
  let [ImageData, setImageData] = useState([]);

  async function getimages() {
    let result = await axios.get(config.baseurl + "images/json");

    setImageData(result.data);
  }
  function dispalyimages(image, index) {
    try {
      let imageName = image.RepoTags[0].split(":")[0];
      let tag = image.RepoTags[0].split(":")[1];
      let imageId = image.Id.split(":")[1].slice(0, 12);
      return (
        <tr>
          <td>
            <p key={index}>{imageName}</p>
          </td>
          <td>
            <p>{tag}</p>
          </td>
          <td>
            <p>{imageId}</p>
          </td>
        </tr>
      );
    } catch (error) {}
  }
  useEffect(() => {
    getimages();
  }, []);
  return (
    <div>
      <h1>Images</h1>
      <table>
        <thead>
          <tr>
            <th>Image Name</th>
            <th>Tag</th>
            <th>Image Id</th>
          </tr>
        </thead>
        {ImageData.map((image, index) => (
          <>{dispalyimages(image, index)}</>
        ))}
      </table>
    </div>
  );
}
export default Images;
