import React, { useState } from "react";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
class FileUploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {
        preview: "",
        raw: "",
        name: "",
      },
    };
  }

  handleChange = (e) => {
    if (e.target.files.length) {
      this.setState({
        image: {
          ...this.state.image,

          preview: URL.createObjectURL(e.target.files[0]),
          name: e.target.files[0].name,
          raw: e.target.files[0],
        },
      });
    }
  };

  handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", this.state.image.raw);

    await fetch("YOUR_URL", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

  render() {
    let { image } = this.state;
    return (
      <div>
        <label htmlFor="upload-button">
          {image.preview ? (
            <div className="w-full h-64 mb-16">
              <img src={image.preview} alt="dummy" className="imagePreview" />
              <p className="text-bold">{image.name}</p>
            </div>
          ) : (
            <div className="uploader">
              <div className="innerContent">
                <AddAPhotoIcon fontSize="large" />
                <div className="text-center">Upload Your Featured Image</div>
              </div>
            </div>
          )}
        </label>
        <input
          type="file"
          id="upload-button"
          style={{ display: "none" }}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default FileUploader;
