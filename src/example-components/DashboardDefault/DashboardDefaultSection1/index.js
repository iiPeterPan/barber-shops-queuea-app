import React, { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Grid, Card, CardContent, Button, Divider } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import axios from "axios";

import Typography from "@material-ui/core/Typography";
import Chart from "react-apexcharts";
import { format } from "date-fns";

export default function LivePreviewExample(props) {
  const chart30Options = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#3c44b1"],
    stroke: {
      color: "#4191ff",
      curve: "smooth",
      width: 4,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
    legend: {
      show: false,
    },
  };
  const chart30Data = [
    {
      name: "Customers",
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65],
    },
  ];

  const chart31Options = {
    chart: {
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#f4772e"],
    stroke: {
      color: "#4191ff",
      curve: "smooth",
      width: 3,
    },
    xaxis: {
      crosshairs: {
        width: 1,
      },
    },
    yaxis: {
      min: 0,
    },
    legend: {
      show: false,
    },
  };
  const chart31Data = [
    {
      name: "Sales",
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65],
    },
  ];

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Fragment>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className="card-box bg-midnight-bloom text-light mb-4">
              <CardContent className="p-3">
                <div className="d-flex align-items-start">
                  <div className="font-weight-bold">
                    <p
                      className="text-white-50 d-block mb-1 text-uppercase"
                      style={{ fontSize: "20px" }}
                    >
                      คิวที่เหลือ
                    </p>
                  </div>
                  <div className="ml-auto">
                    <div className="font-weight-bold text-center d-50 d-flex align-items-center justify-content-center">
                      <span
                        className="font-size-xxl mt-2"
                        style={{ fontSize: "50px" }}
                      >
                        {props.countQueue}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <span className="text-white-50">{props.date}</span>
                </div>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className="card-box text-light mb-4">
              <CardContent className="p-3">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  format="dd/MM/yyyy"
                  value={props.selectedDate}
                  minDate={new Date()}
                  onChange={props.handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Fragment>
    </MuiPickersUtilsProvider>
  );
}
