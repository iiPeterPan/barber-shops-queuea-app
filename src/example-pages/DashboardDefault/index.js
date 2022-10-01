import React, { Fragment, useEffect } from "react";

import { PageTitle } from "../../layout-components";

import DashboardDefaultSection1 from "../../example-components/DashboardDefault/DashboardDefaultSection1";
import DashboardDefaultSection2 from "../../example-components/DashboardDefault/DashboardDefaultSection2";
import DashboardDefaultSection3 from "../../example-components/DashboardDefault/DashboardDefaultSection3";
import DashboardDefaultSection4 from "../../example-components/DashboardDefault/DashboardDefaultSection4";

import { format, set } from "date-fns";

import axios from "axios";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function DashboardDefault() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [queue, setQueue] = React.useState(0);

  const [isDialogOpen, setIsDialogOpen] = React.useState(true);

  const [isLoading, setIsLoading] = React.useState(true);

  const [date, setDate] = React.useState(
    format(new Date(), "dd/MM/yyyy").toString()
  );

  const [data, setData] = React.useState(null);

  const [countQueue, setCountQueue] = React.useState(0);

  const [emptyQueues, setEmptyQueues] = React.useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(format(date, "dd/MM/yyyy").toString());
    fetchMyAPI(prosessDate(format(date, "dd/MM/yyyy").toString()));
  };

  const prosessDate = (dateStr) => {
    const myArray = dateStr.split("/");
    let date = myArray[0];
    let month = myArray[1];
    let year = myArray[2];
    console.log(year + "-" + month + "-" + date);
    return year + "-" + month + "-" + date;
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

  const countQueues = (data) => {
    let queue = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i].ownerOne === "available") {
        queue++;
      }
    }
    console.log(queue);
    return queue;
  };

  useEffect(() => {
    fetchMyAPI(prosessDate(date));
  }, []);

  const fetchMyAPI = async (dateStr) => {
    setIsLoading(true);
    const url =
      "https://union-made-queue-management.herokuapp.com/unionMade/api/getQueuesByData?" +
      `date=${dateStr}`;

    console.log(url);

    const headers = {
      headers: {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
      },
    };

    await axios.get(url, null, headers).then((res) => {
      setData(res.data);
      if (res.data.length == 0) {
        setEmptyQueues(true);
      } else {
        setEmptyQueues(false);
      }
      setCountQueue(countQueues(res.data));
      console.log(res.data);
    });
    setIsLoading(false);
  };

  const tableRefresh = () => {
    fetchMyAPI(prosessDate(date));
  };

  return (
    <Fragment>
      {/* <PageTitle
        titleHeading="Default"
        titleDescription="This is a dashboard page example built using this template."
      /> */}
      <DashboardDefaultSection1
        selectedDate={selectedDate}
        handleDateChange={handleDateChange}
        queue={queue}
        date={date}
        countQueue={countQueue}
      />
      <DashboardDefaultSection2
        data={data}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        emptyQueues={emptyQueues}
        tableRefresh={tableRefresh}
      />
      {/* <DashboardDefaultSection3 /> */}
      {/* <DashboardDefaultSection4 /> */}

      <Dialog
        fullWidth={"md"}
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={isDialogOpen}
      >
        <DialogTitle id="alert-dialog-title">
          {"UnionMade Barbershop"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ใช้สำหรับดูคิวเท่านั้น ไม่สามารถจองคิวออนไลน์ได้
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
