import React, { Component } from "react";
import NavBar from "../../NavBar/NavBar";

export default class PagePosts extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="hidden sm:flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Monitor Your Posts Here</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-base">This is where all your created posts and displayed.</p>
        </div>
        <section className="block sm:hidden text-gray-700 body-font">
          <div className="w-full flex flex-wrap">
            <div className="xl:w-1/3 md:w-1/2">
              <div className="flex justify-center items-center p-4">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div className="flex items-start flex-col pl-5">
                  <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Monitor Your Posts</h2>
                  <p className="text-sm">View or Edit Posts To Your liking.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="hidden sm:flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Title</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Role</th>
                      <th className="px-6 py-3 bg-gray-50"></th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">Jane Cooper</div>
                            <div className="text-sm leading-5 text-gray-500">jane.cooper@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <div className="text-sm leading-5 text-gray-900">Regional Paradigm Technician</div>
                        <div className="text-sm leading-5 text-gray-500">Optimization</div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">Admin</td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">Jane Cooper</div>
                            <div className="text-sm leading-5 text-gray-500">jane.cooper@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <div className="text-sm leading-5 text-gray-900">Regional Paradigm Technician</div>
                        <div className="text-sm leading-5 text-gray-500">Optimization</div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">Admin</td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm leading-5 font-medium text-gray-900">Jane Cooper</div>
                            <div className="text-sm leading-5 text-gray-500">jane.cooper@example.com</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <div className="text-sm leading-5 text-gray-900">Regional Paradigm Technician</div>
                        <div className="text-sm leading-5 text-gray-500">Optimization</div>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                      </td>
                      <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">Admin</td>
                      <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center sm:hidden mt-10">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
