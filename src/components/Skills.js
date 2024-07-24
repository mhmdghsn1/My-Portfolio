import React from "react";

const Skillss = () => {
  return (
    <div className="skills-page">
      <h2>My Certificates</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Certificate Name</th>
            <th>Date of Obtaining</th>
            <th>Certificate Name</th>
            <th>Date of Obtaining</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Meta Front-end Developer</td>
            <td>Meta Coursera, 1/Sep/23</td>
            <td>Google Data Analytics</td>
            <td>Google Coursera, 21/Apr/23</td>
          </tr>
          <tr>
            <td>HTML CSS and JavaScript<br />For Web Developers</td>
            <td>Johns Hopkins University Coursera, 1/Sep/22</td>
            <td>Python For Everybody</td>
            <td>University of Michigan Coursera, 23/Sep/22</td>
          </tr>
          <tr>
            <td>Microsoft Excel</td>
            <td>Alfaisal University | KLD Coursera, 19/Sep/22</td>
            <td>Microsoft Excel</td>
            <td>Al Maaref University /22</td>
          </tr>
          <tr>
            <td>Cybersecurity Roles, Processes &amp; Operating System Security</td>
            <td>IBM Coursera, 2/Apr/23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Skillss;