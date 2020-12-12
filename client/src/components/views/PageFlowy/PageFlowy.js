import React from "react";
import FlowyBlock from "../../FlowyBlock";
import eye from "../../../assets/img/eye.svg";
import eyeBlue from "../../../assets/img/eyeblue.svg";
import action from "../../../assets/img/action.svg";
import actionBlue from "../../../assets/img/actionblue.svg";
import actionOrange from "../../../assets/img/actionorange.svg";
import more from "../../../assets/img/more.svg";
import time from "../../../assets/img/time.svg";
import timeblue from "../../../assets/img/timeblue.svg";
import error from "../../../assets/img/error.svg";
import errorblue from "../../../assets/img/errorblue.svg";
import database from "../../../assets/img/database.svg";
import databaseOrange from "../../../assets/img/databaseorange.svg";
import twitter from "../../../assets/img/twitter.svg";
import twitterorange from "../../../assets/img/twitterorange.svg";
import logred from "../../../assets/img/logred.svg";
import errorred from "../../../assets/img/errorred.svg";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {children}
    </div>
  );
}

class PageFlowy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tempblock: null,
      tempblock2: null,
      value1Snapped: false,
      currentTab: 0,
    };
    this.drag = this.drag.bind(this);
    this.release = this.release.bind(this);
    this.snapping = this.snapping.bind(this);
  }
  componentDidMount() {
    const flowy = window.flowy;
    if (flowy) {
      flowy(document.getElementById("canvas"), this.drag, this.release, this.snapping);
    }
  }
  snapping(drag, first) {
    var grab = drag.querySelector(".grabme");
    grab.parentNode.removeChild(grab);
    var blockin = drag.querySelector(".blockin");
    blockin.parentNode.removeChild(blockin);
    if (drag.querySelector(".blockelemtype").value == "1") {
      drag.innerHTML += `<div class='blockyleft'><img src=${eyeBlue}><p class='blockyname'>New visitor</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>When a <span>new visitor</span> goes to <span>Site 1</span></div>`;
    } else if (drag.querySelector(".blockelemtype").value == "2") {
      drag.innerHTML += `<div class='blockyleft'><img src=${actionBlue}><p class='blockyname'>Action is performed</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Action 1</span> is performed</div>`;
    } else if (drag.querySelector(".blockelemtype").value == "3") {
      drag.innerHTML += `<div class='blockyleft'><img src=${timeblue}><p class='blockyname'>Time has passed</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>10 seconds</span> have passed</div>`;
    } else if (drag.querySelector(".blockelemtype").value == "4") {
      drag.innerHTML += `<div class='blockyleft'><img src=${errorblue}><p class='blockyname'>Error prompt</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>When <span>Error 1</span> is triggered</div>`;
    } else if (drag.querySelector(".blockelemtype").value == "5") {
      drag.innerHTML += `<div class='blockyleft'><img src=${databaseOrange}><p class='blockyname'>New database entry</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>Add <span>Data object</span> to <span>Database 1</span></div>`;
    } else if (drag.querySelector(".blockelemtype").value == "6") {
      drag.innerHTML += `<div class='blockyleft'><img src=${databaseOrange}><p class='blockyname'>Update database</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>Update <span>Database 1</span></div>`;
    } else if (drag.querySelector(".blockelemtype").value == "7") {
      drag.innerHTML += `<div class='blockyleft'><img src=${actionOrange}><p class='blockyname'>Perform an action</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>Perform <span>Action 1</span></div>`;
    } else if (drag.querySelector(".blockelemtype").value == "8") {
      drag.innerHTML += `<div class='blockyleft'><img src=${twitterorange}><p class='blockyname'>Make a tweet</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>Tweet <span>Thank you</span> to the account <span>@alyssaxuu</span></div>`;
    } else if (drag.querySelector(".blockelemtype").value == "9") {
      drag.innerHTML += `<div class='blockyleft'><img src=${logred}><p class='blockyname'>Add new log entry</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>Add new <span>success</span> log entry</div>`;
    } else if (drag.querySelector(".blockelemtype").value == "10") {
      drag.innerHTML += `<div class='blockyleft'><img src=${logred}><p class='blockyname'>Update logs</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>Edit <span>Log Entry 1</span></div>`;
    } else if (drag.querySelector(".blockelemtype").value == "11") {
      drag.innerHTML += `<div class='blockyleft'><img src=${errorred}><p class='blockyname'>Prompt an error</p></div><div class='blockyright'><img src=${more}></div><div class='blockydiv'></div><div class='blockyinfo'>Trigger <span>Error 1</span></div>`;
    }
    return true;
  }
  drag(block) {
    block.classList.add("blockdisabled");
    this.setState({ tempblock2: block });
  }

  release() {
    let tempblock2 = this.state.tempblock2;
    tempblock2.classList.remove("blockdisabled");
    this.setState({ tempblock2 });
  }
  render() {
    return (
      <div className="w-full flex items-center">
        <div id="blocklist" className="bg-white min-h-screen pt-6">
          <div className="font-bold text-2xl px-2 pb-6">Blocks</div>
          <Tabs value={this.state.currentTab} onChange={(e, newValue) => this.setState({ currentTab: newValue })} aria-label="simple tabs example">
            <Tab label="Triggers" />
            <Tab label="Actions" />
            <Tab label="Loggers" />
          </Tabs>
          <TabPanel value={this.state.currentTab} index={0}>
            <FlowyBlock value={1} blockTitle="New Visitor" blockDesc="Triggers When Someone visits a specified page" blockIcon={eye} />
            <FlowyBlock value={2} blockTitle="Action is performed" blockDesc="Triggers when somebody performs a specified action" blockIcon={action} />
            <FlowyBlock value={3} blockTitle="Time has passed" blockDesc="Triggers after a specified amount of time" blockIcon={time} />
            <FlowyBlock value={4} blockTitle="Error Prompt" blockDesc="Triggers when a specified error happens" blockIcon={error} />
          </TabPanel>
          <TabPanel value={this.state.currentTab} index={1}>
            <FlowyBlock value={5} blockTitle="New Database entry" blockDesc="Adds new entry to a specified database" blockIcon={database} />
            <FlowyBlock value={6} blockTitle="Update Database" blockDesc="Edits and deletes database entries" blockIcon={database} />
            <FlowyBlock value={7} blockTitle="Perform an Action" blockDesc="Performs or edits a specified action" blockIcon={action} />
            <FlowyBlock value={8} blockTitle="Make a tweet" blockDesc="Makes a Tweet with a specified query" blockIcon={twitter} />
          </TabPanel>
          <TabPanel value={this.state.currentTab} index={2}>
            <FlowyBlock value={9} blockTitle="New Visitor" blockDesc="Triggers When Someone visits a specified page" blockIcon={eye} />
            <FlowyBlock value={10} blockTitle="Action is performed" blockDesc="Triggers when somebody performs a specified action" blockIcon={action} />
            <FlowyBlock value={11} blockTitle="Time has passed" blockDesc="Triggers after a specified amount of time" blockIcon={time} />
          </TabPanel>
        </div>

        <div id="canvas"></div>
      </div>
    );
  }
}

export default PageFlowy;
