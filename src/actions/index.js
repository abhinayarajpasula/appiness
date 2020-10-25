import { requestDashboardData } from "../api";

function dashboardData(data) {
  return {
    type: "FETCH_DASHBOARD_DATA",
    payload: data
  };
}

export function handleDashboardData() {
  return async dispatch => {
    const data = await requestDashboardData();
    dispatch(dashboardData(data));
  };
}
