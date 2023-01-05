import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Table.css";

export default function Table() {
  const [publicationsData, setPublicationsData] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/").then((res) => {
      //console.log(res.data);
      setPublicationsData(res.data);
    });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Student Name</th>
            <th>Paper</th>
            <th>Journal Name</th>
            <th>Publication Type</th>
            <th>Volume</th>
            <th>Publication Date</th>
            <th>ISSN Number</th>
          </tr>
        </thead>
        {publicationsData ? (
          publicationsData.map((data) => (
            <tbody key={data.ID}>
              <tr>
                <td>{data.ID}</td>
                <td>{data.StudentName}</td>
                <td>{data.Paper}</td>
                <td>{data.JournalName ? data.JournalName : ""}</td>
                <td>{data.PublicationType ? data.PublicationType : ""}</td>
                <td>{data.Volume ? data.Volume : ""}</td>
                <td>{data.PublicationDate ? data.PublicationDate : ""}</td>
                <td>{data.ISSNNumber ? data.ISSNNumber : ""}</td>
              </tr>
            </tbody>
          ))
        ) : (
          <></>
        )}
      </table>
    </div>
  );
}
