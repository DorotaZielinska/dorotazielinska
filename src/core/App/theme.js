const themeColor = {
    white: "#FFFFFF",
    dolly: "#FCFD87",
    hintOfYellow: "#FEFEF6",
    mineShaft: "#252525",
    blackPearl:"#031017",
  };
  
  const breakpoints = {
    mobileVerticalMax: "575px",
    mobileMax: "767px",
    tabletVerticalMax: "991px",
    tabletHorizontalMax: "1199px",
    laptopMax: "1392px",
  };
  
  export const lightTheme = {
    primary: {
      text: themeColor.hintOfYellow,
      background: themeColor.dolly,
    },
    burger: {
      background: themeColor.white,
    },
    breakpoints,
  };
  
  export const darkTheme = {
    primary: {
      background: themeColor.mineShaft,
    },
  };
  