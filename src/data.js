import Models from "./assets/images/model-s.jpg";
import Model3 from "./assets/images/model-3.jpg";
import Modelx from "./assets/images/model-x.jpg";
import Solarpanel from "./assets/images/solar-panel.jpg";
import Solarroof from "./assets/images/solar-roof.jpg";
import Accessories from "./assets/images/accessories.jpg";
import PowerWall from "./assets/images/powerwall.jpg";
import VideoY from "./assets/videos/Model-Y.mp4";

const carData = [
  {
    id: 0,
    title: "Model Y",
    description: "Order Online for Touchless Delivery",
    video: VideoY,
    range: "410",
    time: "2.05",
    topSpeed: "190",
    peakPower: "1,040",
    LeftButton: "Order Now",
    RightButton: "Learn More",
    isVideo: true,
  },
  {
    id: 1,
    title: "Model S",
    description: "Order Online for Touchless Delivery",
    image: Models,
    range: "390",
    time: "1.99",
    topSpeed: "200",
    peakPower: "1,020",
    LeftButton: "Order Now",
    RightButton: "Learn More",
    isVideo: false,
  },
  {
    id: 2,
    title: "Model X",
    description: "Order Online for Touchless Delivery",
    image: Modelx,
    range: "350",
    time: "1.55",
    topSpeed: "150",
    peakPower: "1,130",
    LeftButton: "Order Now",
    RightButton: "Learn More",
    isVideo: false,
  },

  {
    id: 4,
    title: "Model 3",
    description: "Order Online for Touchless Delivery",
    image: Model3,
    range: "400",
    time: "2.99",
    topSpeed: "180",
    peakPower: "900",
    LeftButton: "Order Now",
    RightButton: "Learn More",
    isVideo: false,
  },
  {
    id: 5,
    title: "Solar Panels",
    description: "Money-back guarantee",
    image: Solarpanel,
    LeftButton: "Order Now",
    RightButton: "Learn More",
    isVideo: false,
  },
  {
    id: 6,
    title: "Solar Roofs",
    description: "Produce Clean Energy From Your Roof",
    image: Solarroof,
    LeftButton: "Order Now",
    RightButton: "Learn More",
    isVideo: false,
  },
  {
    id: 7,
    title: "Powerwall",
    description: "",
    image: PowerWall,
    LeftButton: "Order Now",
    RightButton: "Learn More",
    isVideo: false,
  },
  {
    id: 8,
    title: "Accessories",
    description: "",
    image: Accessories,
    LeftButton: "Order Now",
    isVideo: false,
  },
];

export default carData;
