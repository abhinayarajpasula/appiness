import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { handleDashboardData } from "./actions";

function Dashboard() {
  const [isLoading, setLoading] = useState(true);
  const dashboardData = useSelector(state => state);
  const dispatch = useDispatch();
  console.log("dashboardData: ", dashboardData);

  useEffect(() => {
    try {
      dispatch(handleDashboardData()).then(() => {
        setLoading(false);
      });
    } catch (error) {
      setLoading(false);
    }
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading..</p>;
  }

  return (
    dashboardData && (
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dashboardData.user.map(item => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.age}</TableCell>
                  <TableCell>{item.gender}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.phoneNo}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}

export default Dashboard;
