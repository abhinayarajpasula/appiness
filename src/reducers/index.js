function dashboardReducer(state = {}, action) {
  switch (action.type) {
    case "FETCH_DASHBOARD_DATA":
      return action.payload;
    default:
      return state;
  }
}

export default dashboardReducer;
