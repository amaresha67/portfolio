function NavReducer(state, action) {
  switch (action.type) {
    case "home":
      return {
        ...state,
        home: true,
        portfolio: false,
        education: false,
        contact: false,
      };
    case "portfolio":
      return {
        ...state,
        home: false,
        portfolio: true,
        education: false,
        contact: false,
      };
    case "education":
      return {
        ...state,
        home: false,
        portfolio: false,
        education: true,
        contact: false,
      };
    case "contact":
      return {
        ...state,
        home: false,
        portfolio: false,
        education: false,
        contact: true,
      };
    default:
      return { ...state };
  }
}

export default NavReducer;
