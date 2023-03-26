import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import produce from "immer";
import ExpandableText from "./components/ExpandableText/ExpandableText";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  return (
    <>
      <br />
      <h1>Excercise - Expandable Text</h1>
      <div>
        <ExpandableText>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          rutrum elementum erat et tristique. Fusce ut sem suscipit, maximus
          odio ac, feugiat nulla. Suspendisse sit amet eros quam. Aenean
          euismod, lorem dictum consectetur semper, sapien neque scelerisque
          neque, ut tempus risus orci vel lectus. Aliquam erat volutpat. Vivamus
          quis arcu eros. Aliquam accumsan volutpat porttitor. Fusce eget
          rhoncus lorem. Praesent lobortis, eros non accumsan vestibulum, tellus
          mi auctor diam, placerat eleifend massa nulla dignissim dui. Nulla
          mauris urna, eleifend pellentesque est nec, laoreet mattis dui. Etiam
          a dui nibh. Fusce vitae arcu vitae libero tristique condimentum quis
          ac mi. Nulla sit amet dui ac erat volutpat tempus sit amet et leo.
          Curabitur molestie, libero ac viverra elementum, mi elit consectetur
          est, dignissim malesuada lacus magna at turpis. Etiam leo lorem,
          cursus at commodo ut, vulputate nec elit. Etiam aliquet bibendum erat,
          ac molestie mauris efficitur quis. Phasellus bibendum magna justo, nec
          vulputate urna efficitur sed. Vestibulum ante nibh, laoreet ac
          accumsan non, pretium ac est. Fusce nec consectetur odio. Donec
          fringilla condimentum massa. Praesent et urna ut magna dignissim
          vulputate vel eu ligula. Aenean consectetur condimentum tortor eget
          consectetur. Proin augue erat, sodales vitae gravida vel, dignissim
          vel leo. Praesent et sollicitudin massa. In sodales arcu in turpis
          vulputate ullamcorper. Nunc pretium quam non dignissim elementum.
          Praesent gravida metus id faucibus consectetur. Aenean in purus
          eleifend nisl varius tempus ut eget purus. Morbi orci nisl, dictum ac
          faucibus at, congue et neque. Duis porttitor, nisi non gravida
          interdum, est risus vestibulum sem, a hendrerit nunc ante eu diam. In
          id pulvinar massa, sit amet finibus mi. Nunc nec ultrices erat.
        </ExpandableText>
      </div>
    </>
  );
}

export default App;
