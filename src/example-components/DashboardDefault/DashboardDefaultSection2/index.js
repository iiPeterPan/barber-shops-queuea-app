import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  IconButton,
  LinearProgress,
  Card,
  CardContent,
  Button,
  Tooltip,
} from "@material-ui/core";

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header pr-2">
          <div className="card-header--title">ตารางคิว</div>
          <div className="card-header--actions">
            <Tooltip arrow title="Refresh">
              <IconButton size="small" color="primary" className="mr-3">
                <FontAwesomeIcon icon={["fas", "cog"]} spin />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <CardContent className="p-3">
          <div className="table-responsive">
            <table className="table table-borderless table-hover text-nowrap mb-0">
              <thead>
                <tr>
                  <th>เวลา</th>
                  <th className="text-center">ช่าง 1</th>
                  <th className="text-center">ช่าง 2</th>
                  <th className="text-center">Progress</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12:00</td>
                  <td className="text-center">
                    <div className="badge badge-danger px-4 w-100">จองแล้ว</div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-success px-4 w-100">ว่าง</div>
                  </td>
                  <td>
                    <LinearProgress value={55} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary"
                      >
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>13:00</td>
                  <td className="text-center">
                    <div className="badge badge-danger px-4 w-100" w-100>
                      จองแล้ว
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-warning px-4 w-100">ไม่รับ</div>
                  </td>
                  <td>
                    <LinearProgress value={55} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary"
                      >
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                <tr>
                  <td>14:00</td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success w-100">ว่าง</div>
                  </td>
                  <td className="text-center">
                    <div className="badge badge-danger px-4 w-100">จองแล้ว</div>
                  </td>
                  <td>
                    <LinearProgress value={67} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary"
                      >
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr>
                {/* <tr>
                  <td>15:00</td>
                  <td>
                    <div>
                      <a
                        href="#/"
                        onClick={(e) => e.preventDefault()}
                        className="font-weight-bold text-black"
                        title="..."
                      >
                        Beck Simpson
                      </a>
                      <span className="text-black-50 d-block">
                        Frontend Developer
                      </span>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="px-4 badge badge-success">Completed</div>
                  </td>
                  <td>
                    <LinearProgress value={39} color="primary" />
                  </td>
                  <td className="text-center">
                    <Tooltip arrow title="View Details">
                      <IconButton
                        size="small"
                        variant="outlined"
                        color="primary"
                      >
                        <FontAwesomeIcon icon={["fas", "arrow-right"]} />
                      </IconButton>
                    </Tooltip>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </CardContent>
        {/* <div className="card-footer d-flex justify-content-between">
          <Button color="primary" size="small">
            Delete
          </Button>
          <div>
            <Button
              size="small"
              variant="contained"
              className="mr-3"
              color="primary"
            >
              View all
            </Button>
            <Button size="small" variant="contained" color="secondary">
              Add new entry
            </Button>
          </div>
        </div> */}
      </Card>
    </Fragment>
  );
}
