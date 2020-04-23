import React from 'react'
import PropTypes from 'prop-types'
import BackgroundImage from 'gatsby-background-image'
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../styles/parallaxStyle";

const useStyles = makeStyles(styles);

export default function ParallaxHeader(props) {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 3;
  }
  const [transform, setTransform] = React.useState(
    "translate3d(0," + windowScrollTop + "px,-2)"
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,-2)");
  };


  const { filter, className, children, style, backgroundImage, small } = props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined
  });
  return (
    <BackgroundImage
    fluid={backgroundImage}
    className={parallaxClasses}
    style={{
    ...style,
    backgroundAttachment: 'fixed',     
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    transform: transform
    }}
    >  
 
      {children}
    </BackgroundImage>
  );
}

ParallaxHeader.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  backgroundImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  small: PropTypes.bool
};

