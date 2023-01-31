import { useState, useEffect, useRef, useCallback } from "react";
import Hammer from "hammerjs";
import { toast } from "react-toastify";

const useSwipe = (count) => {
  const [profileIndex, setProfileIndex] = useState(0);
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;
    if (el) {
      var hammer = new Hammer(el);
      hammer.on("pan", function (event) {
        el.classList.add("moving");
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        var xMulti = event.deltaX * 0.03;
        var yMulti = event.deltaY / 80;
        var rotate = xMulti * yMulti;

        el.style.transform =
          "translate(" +
          event.deltaX +
          "px, " +
          event.deltaY +
          "px) rotate(" +
          rotate +
          "deg)";
      });

      hammer.on("panend", function (event) {
        el.classList.remove("moving");

        var moveOutWidth = document.body.clientWidth;
        var keep =
          Math.abs(event.deltaX) < 20 || Math.abs(event.velocityX) < 0.5;
        if (keep) {
          el.style.transform = "";
        } else {
          var endX = Math.max(
            Math.abs(event.velocityX) * moveOutWidth,
            moveOutWidth
          );
          var toX = event.deltaX > 0 ? endX : -endX;
          var endY = Math.abs(event.velocityY) * moveOutWidth;
          var toY = event.deltaY > 0 ? endY : -endY;
          var xMulti = event.deltaX * 0.03;
          var yMulti = event.deltaY / 80;
          var rotate = xMulti * yMulti;

          swipeCard(
            toX,
            toY + event.deltaY,
            rotate,
            `${toX < 0 ? "Not " : ""}Interested`
          );
        }
      });
    }
  }, [profileIndex]);

  const swipeCard = useCallback((x, y, rotate, toastMessage) => {
    const el = cardRef.current;
    el.classList.add("removed");
    el.ontransitionend = () => {
      setProfileIndex((idx) => idx + 1);
      toast(toastMessage);
    };
    el.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
  }, []);

  return [cardRef, profileIndex, swipeCard];
};

export default useSwipe;
