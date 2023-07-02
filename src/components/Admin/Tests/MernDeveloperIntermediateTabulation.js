// import react, react-router-dom packages and index.css file to render MernDeveloperIntermediateTabulation component
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import "./table.css";

function MernDeveloperIntermediateTest() {
  // location varaiable to get location of the testReports route and state
  const location = useLocation();
  // useState of data to store Mern Developer Intermediate test data responses
  const [data, setData] = useState(
    location.state.map((item, index) => ({ ...item, id: index + 1 }))
  );
  // navigate variable used to naviagating to different routes
  const navigate = useNavigate();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 10,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "Timestamp",
      headerName: "Completed On",
      width: 160,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "Name",
      headerName: "Name",
      width: 220,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "Email_Address",
      headerName: "Email Address",
      width: 220,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "Phone_Number",
      headerName: "Phone Number",
      sortable: false,
      width: 120,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "total_score",
      headerName: "Total Score",
      width: 120,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "aptitude_score",
      headerName: "Aptitude Score",
      width: 120,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "technical_score",
      headerName: "Technical Score",
      width: 120,
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "View Score",
      headerName: "View Score",
      sortable: false,
      width: 120,

      renderCell: (params) => (
        <button
          onClick={() => navigate("/studentChart", { state: params.row })}
        >
          View
        </button>
      ),
    },
  ];

  return (
    <div className=''>
      <h1 style={{ textAlign: "center" }}>
        MERN Developer Intermediate Test Tabulation Data
      </h1>
      {/* desktop table container with table of MERN Developer Intermediate test data respones */}
      <div className='d-none d-lg-block text-center'>
        {data.length > 0 ? (
          <div
            style={{
              minHeight: 100,
              width: "95%",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 10 },
                },
              }}
              pageSizeOptions={[5, 10, 15, 20]}
            />
          </div>
        ) : (
          "No Data Found"
        )}
      </div>
      {/* mobile table container with table of MERN Developer Intermediate test data responses */}
      <div className='d-lg-none mobile-table-container'>
        {data.length > 0
          ? data.map((item, index) => (
              <div className='table-data-container'>
                <div className='table-data'>
                  <p className='th'>Id</p>
                  <p className='td'>{index + 1}</p>
                </div>
                <div className='table-data'>
                  <p>Completed On</p>
                  <p className='td'>{item.Timestamp}</p>
                </div>
                <div className='table-data'>
                  <p>Name</p>
                  <p className='td'>{item.Name}</p>
                </div>
                <div className='table-data'>
                  <p>Email Address</p>
                  <p className='td'>{item.Email_Address}</p>
                </div>
                <div className='table-data'>
                  <p>Phone Number</p>
                  <p className='td'>{item.Phone_Number}</p>
                </div>
                <div className='table-data'>
                  <p>Email Address</p>
                  <p className='td'>{item.Email_Address}</p>
                </div>
                <div className='table-data'>
                  <p>Total Score</p>
                  <p className='td'>{item.Score}</p>
                </div>
                <div className='table-data'>
                  <p>
                    {item.aptitude_score !== undefined
                      ? "Aptitude Score"
                      : "Java Score"}
                  </p>
                  <p className='td'>
                    {item.aptitude_score !== undefined
                      ? item.aptitude_score
                      : item.fullstack_java_score}
                  </p>
                </div>
                <div className='table-data'>
                  <p>
                    {item.technical_score !== undefined
                      ? "Technical Score"
                      : "React Score"}
                  </p>
                  <p className='td'>
                    {item.technical_score !== undefined
                      ? item.technical_score
                      : item.reasoning_score !== undefined
                      ? item.reasoning_score
                      : item.fullstack_react_score}
                  </p>
                </div>
                <div className='table-data'>
                  <p>Test Type</p>
                  <p className='td'>{item.testType}</p>
                </div>
                {/* clicking view button it'll navigates to studentChart route */}
                <div className='view-button'>
                  <button
                    className='btn'
                    onClick={() => navigate("/studentChart", { state: item })}
                  >
                    View Score
                  </button>
                </div>
              </div>
            ))
          : "No Data Found"}
      </div>
    </div>
  );
}

export default MernDeveloperIntermediateTest;
