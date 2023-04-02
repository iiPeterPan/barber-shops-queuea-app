import React, { Fragment, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import RefreshIcon from "@material-ui/icons/Refresh";

import {
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
} from "@material-ui/core";

import axios from "axios";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    paddingTop: "20%",
    paddingLeft: "80%",
    paddingBottom: "10%",
  },
  isLoading: {
    paddingTop: "10%",
    paddingLeft: "105%",
    paddingBottom: "10%",
  },
});

export default function LivePreviewExample(props) {
  const classes = useStyles();

  useEffect(() => {
    console.log(props);
  }, [props.data]);

  const refresh = () => {
    props.tableRefresh();
  };

  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title">ตารางคิว</div>
          <div className="card-header--actions">
            <Button variant="outlined" color="primary" onClick={refresh}>
              <RefreshIcon />
            </Button>
            {/* <Tooltip arrow title="Refresh">
              <IconButton size="small" color="primary" className="mr-3">
                <FontAwesomeIcon icon={["fas", "arrow-alt-to-bottom"]} spin />
              </IconButton>
            </Tooltip> */}
          </div>
        </div>
        <CardContent className="p-3">
          <div className="table-responsive">
            <table className="table table-borderless text-nowrap mb-0">
              <thead>
                <tr>
                  <th>เวลา</th>
                  <th className="text-center">ช่าง เต๋อ</th>
                  <th className="text-center">ช่าง ไปร์ท</th>
                </tr>
              </thead>
              <tbody>
                {props.isLoading ? (
                  <div className={classes.isLoading}>
                    <CircularProgress />
                  </div>
                ) : props.emptyQueues ? (
                  <div className={classes.root}>
                    <Typography variant="h3" gutterBottom>
                      ไม่มีคิว
                    </Typography>
                  </div>
                ) : (
                  props.data.map((obj, index) => {
                    return (
                      <tr>
                        <td>{obj.queueTime}:00</td>
                        <td className="text-center">
                          {obj.ownerOne === "available" ? (
                            <div className="badge badge-success px-4 w-100">
                              &nbsp; &nbsp; ว่าง &nbsp; &nbsp;
                            </div>
                          ) : (
                            <div className="badge badge-danger px-4 w-100">
                              จองแล้ว
                            </div>
                          )}
                        </td>
                        <td className="text-center">
                          {obj.ownerTwo === "available" ? (
                            <div className="badge badge-success px-4 w-100">
                              &nbsp; &nbsp; ว่าง &nbsp; &nbsp;
                            </div>
                          ) : (
                            <div className="badge badge-danger px-4 w-100">
                              จองแล้ว
                            </div>
                          )}
                        </td>
                      </tr>
                    );
                  })
                )}

                {/* <tr>
                  <td>11:00</td>
                  <td className="text-center">
                    <div className="badge badge-danger px-4 w-100">จองแล้ว</div>
                  </td>
                </tr>
                <tr>
                  <td>12:00</td>
                  <td className="text-center">
                    <div className="badge badge-danger px-4 w-100">จองแล้ว</div>
                  </td>
                </tr>
                <tr>
                  <td>13:00</td>
                  <td className="text-center">
                    <div className="badge badge-danger px-4 w-100">จองแล้ว</div>
                  </td>
                </tr>
                <tr>
                  <td>14:00</td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success w-100">ว่าง</div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </Fragment>
  );
}
