import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  svgHover: {
    fill: theme.palette.foreground.default,
    "&:hover": {
        fill: theme.palette.primary.main,
    },
    transition: "all 0.5s ease",
  },
}));

export const Logo = () => {
    const classes = useStyles();

    return (

<svg id="exZrzDheiRM1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156.24 224.13" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" className={classes.svgHover}>
<defs>
<filter id="exZrzDheiRM5-filter" x="-150%" width="400%" y="-150%" height="400%">
<feGaussianBlur id="exZrzDheiRM5-filter-blur-0" stdDeviation="2,0" result="result"/>
</filter><filter id="exZrzDheiRM6-filter" x="-150%" width="400%" y="-150%" height="400%">
<feGaussianBlur id="exZrzDheiRM6-filter-blur-0" stdDeviation="2,0" result="result"/>
</filter>
</defs>
<g>
<g transform="translate(22.585981-.012414)">
<rect class="cls-1" width="9.9" height="133.85" rx="3.75" ry="3.75" transform="matrix(1 0 0 0.810023 12.47 34.044211)" filter="url(#ems0PTED1Nx4-filter)"/>
<rect class="cls-1" width="9.9" height="108.08" rx="3.75" ry="3.75" transform="matrix(0 1-.64609 0 83.199407 137.28)" filter="url(#ems0PTED1Nx5-filter)"/>
<rect class="cls-1" width="9.9" height="112.54" rx="3.75" ry="3.75" transform="matrix(.777396-.498122 0.252175 0.393558 21.870643 37.200705)" />
<rect class="cls-1" width="9.9" height="201.44" rx="3.75" ry="3.75" transform="matrix(.880973 0.473166-.260442 0.484909 78.764802 32.392832)" />
</g>
</g>
<path d="" fill="none" stroke="#3f5787" stroke-width="0.5"/>
</svg>
//       <svg 
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="-35 -10 220 220"
//         className={classes.svgHover}
//       >
//         <g id="Layer_2" data-name="Layer 2">
//           <g id="Layer_5" data-name="Layer 5">


//           <rect width="9.9" height="133.85" rx="3.75" ry="3.75" transform="translate(.47 31.33)" filter="url(#exZrzDheiRM5-filter)" fill="#1d1d1b"/>
// <rect width="9.9" height="108.08" rx="3.75" ry="3.75" transform="matrix(0 1-.64609 0 82.199407 155.28)" filter="url(#exZrzDheiRM6-filter)" fill="#1d1d1b"/>
// <rect width="9.9" height="112.54" rx="3.75" ry="3.75" transform="matrix(.777396-.498122 0.252175 0.393558 21.870643 37.200705)" fill="#1d1d1b"/>
// <rect width="9.9" height="201.44" rx="3.75" ry="3.75" transform="matrix(.880973 0.473166-.293863 0.547136 79.335643 31.33)" fill="#1d1d1b"/>

//           </g>
//         </g>
//       </svg>
    );
};
