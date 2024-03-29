function about(state, action) {
  switch (action.type) {
    case "skills":
      return { ...state, skills: true, education: false };
    case "education":
      return { ...state, skills: false, education: true };
    default:
      return state;
  }
}

export default about;
