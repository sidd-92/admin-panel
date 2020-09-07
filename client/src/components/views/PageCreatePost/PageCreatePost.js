import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Tooltip from "@material-ui/core/Tooltip";
import HelpIcon from "@material-ui/icons/Help";

class PageCreatePost extends React.Component {
  render() {
    return (
      <div>
        <div className="bg-transparent text-black text-4xl font-bold p-6">
          Create a Post Below
        </div>
        <form noValidate autoComplete="off">
          <div className="w-full flex flex-col justify-center items-start">
            <div className="pl-6 text-lg font-semibold">
              Cooking Instructions{" "}
              <Tooltip
                title="Write your cooking instructions stepwise"
                arrow={true}
                placement="right-end"
              >
                <span>
                  <HelpIcon fontSize="small" />
                </span>
              </Tooltip>
            </div>
            <div className="w-1/2 pl-6 ">
              <TextField
                id="outlined-basic"
                label=""
                size="small"
                variant="outlined"
                fullWidth={true}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PageCreatePost;
