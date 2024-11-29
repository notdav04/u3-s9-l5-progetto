import { Component } from "react";
import UpperBanner from "./UpperBanner";
import SliderGallery from "./SliderGallery";
import Grid from "./Grid";
class MainSection extends Component {
  render() {
    return (
      <div className="container-fluid px-4">
        <UpperBanner />
        <h4 style={{ color: "#f5f5f1" }}>Trending Now</h4>
        {/* <Grid search="harry" /> */}
        <SliderGallery search="harry" />
        <h4 style={{ color: "#f5f5f1" }}>Watch It Again</h4>
        {/* <Grid search="avatar" /> */}
        <SliderGallery search="avatar" />
        <h4 style={{ color: "#f5f5f1" }}>New Releases</h4>
        {/* <Grid search="natale a" /> */}
        <SliderGallery search="natale a" />
      </div>
    );
  }
}

export default MainSection;
