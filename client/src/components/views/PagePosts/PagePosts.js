import React, { Component } from "react";
import NavBar from "../../NavBar/NavBar";

export default class PagePosts extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar history={this.props.history} />
        <div className="text-4xl cursive text-center">
          View Your Created Posts Here!
        </div>
        <div className="bg-white pb-4 px-4 rounded-md w-full">
          <div className="flex justify-between w-full pt-6 ">
            <p className="ml-3"> Users Table</p>
            <svg
              width="14"
              height="4"
              viewBox="0 0 14 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <circle cx="2.19796" cy="1.80139" r="1.38611" fill="#222222" />
                <circle cx="11.9013" cy="1.80115" r="1.38611" fill="#222222" />
                <circle cx="7.04991" cy="1.80115" r="1.38611" fill="#222222" />
              </g>
            </svg>
          </div>
          <div className="w-full flex justify-end px-2 mt-2">
            <div className="w-full sm:w-64 inline-block relative ">
              <input
                type=""
                name=""
                className="leading-snug border border-gray-300 block w-full appearance-none bg-gray-100 text-sm text-gray-600 py-1 px-4 pl-8 rounded-lg"
                placeholder="Search"
              />

              <div className="pointer-events-none absolute pl-3 inset-y-0 left-0 flex items-center px-2 text-gray-300">
                <svg
                  className="fill-current h-3 w-3"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 511.999 511.999"
                >
                  <path d="M508.874 478.708L360.142 329.976c28.21-34.827 45.191-79.103 45.191-127.309C405.333 90.917 314.416 0 202.666 0S0 90.917 0 202.667s90.917 202.667 202.667 202.667c48.206 0 92.482-16.982 127.309-45.191l148.732 148.732c4.167 4.165 10.919 4.165 15.086 0l15.081-15.082c4.165-4.166 4.165-10.92-.001-15.085zM202.667 362.667c-88.229 0-160-71.771-160-160s71.771-160 160-160 160 71.771 160 160-71.771 160-160 160z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto mt-6">
            <table className="table-auto border-collapse w-full">
              <thead>
                <tr
                  className="rounded-lg text-sm font-medium text-gray-700 text-left"
                  style={{ fontSize: "0.9674rem" }}
                >
                  <th
                    className="px-4 py-2 bg-gray-200 "
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    Title
                  </th>
                  <th
                    className="px-4 py-2 bg-gray-200"
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    Content
                  </th>
                  <th
                    className="px-4 py-2 "
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    Author
                  </th>
                  <th
                    className="px-4 py-2 "
                    style={{ backgroundColor: "#f8f8f8" }}
                  >
                    Views
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm font-normal text-gray-700">
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                  <td className="px-4 py-4">Intro to CSS</td>
                  <td className="px-4 py-4">Intro to CSS</td>
                  <td className="px-4 py-4">Adam</td>
                  <td className="px-4 py-4">858</td>
                </tr>
                <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                  <td className="max-w-sm truncate px-4 py-4">
                    A Long and Winding Tour of the History of UI Frameworks and
                    Tools and the Impact on Design
                  </td>
                  <td className="max-w-2xl truncate px-4 py-4">
                    A Long and Winding Tour of the History of UI Frameworks and
                    Tools and the Impact on Design A Long and Winding Tour of
                    the History of UI Frameworks and Tools and the Impact on
                    Design A Long and Winding Tour of the History of UI
                    Frameworks and Tools and the Impact on Design A Long and
                    Winding Tour of the History of UI Frameworks and Tools and
                    the Impact on Design A Long and Winding Tour of the History
                    of UI Frameworks and Tools and the Impact on Design
                  </td>
                  <td className="px-4 py-4">Adam</td>
                  <td className="px-4 py-4">112</td>
                </tr>
                <tr className="hover:bg-gray-100  border-gray-200">
                  <td className="px-4 py-4">Intro to JavaScript</td>
                  <td className="px-4 py-4">Chris</td>
                  <td className="px-4 py-4">Chris</td>
                  <td className="px-4 py-4">1,280</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div
            id="pagination"
            className="w-full flex justify-center border-t border-gray-100 pt-4 items-center"
          >
            <svg
              className="h-6 w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7072C13.6834 17.0977 14.3166 17.0977 14.7071 16.7072C15.0977 16.3167 15.0977 15.6835 14.7071 15.293L11.4142 12L14.7071 8.70712C15.0977 8.31659 15.0977 7.68343 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                  fill="#2C2C2C"
                />
              </g>
            </svg>

            <p className="leading-relaxed cursor-pointer mx-2 text-blue-600 hover:text-blue-600 text-sm">
              1
            </p>
            <p className="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600">
              2
            </p>
            <p className="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600">
              {" "}
              3{" "}
            </p>
            <p className="leading-relaxed cursor-pointer mx-2 text-sm hover:text-blue-600">
              {" "}
              4{" "}
            </p>
            <svg
              className="h-6 w-6"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L10.7071 7.2929C10.3166 6.9024 9.6834 6.9024 9.2929 7.2929C8.9024 7.6834 8.9024 8.3166 9.2929 8.7071L12.5858 12L9.2929 15.2929C8.9024 15.6834 8.9024 16.3166 9.2929 16.7071C9.6834 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12Z"
                fill="#18A0FB"
              />
            </svg>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}
