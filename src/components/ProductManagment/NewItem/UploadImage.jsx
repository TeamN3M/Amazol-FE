import React from "react";
import ReactDOM from "react-dom";
import ImageUploader from "react-images-upload";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(pictureFiles) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
  }

  render() {
    return (
      <ImageUploader
        withIcon={false}
        withPreview={true}
        buttonText='Choose images'
        onChange={this.onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
