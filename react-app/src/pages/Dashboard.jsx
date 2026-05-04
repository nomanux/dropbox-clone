import React, { useState } from "react";

const FolderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 40 40" focusable="false" role="img">
    <g fill="none" fillRule="evenodd">
      <path d="M18.422 11h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 32 5 31.331 5 30.507V9.493C5 8.663 5.671 8 6.5 8h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#71B9F4" />
      <path d="M18.422 10h15.07c.84 0 1.508.669 1.508 1.493v18.014c0 .818-.675 1.493-1.508 1.493H6.508C5.668 31 5 30.331 5 29.507V8.493C5 7.663 5.671 7 6.5 7h7.805c.564 0 1.229.387 1.502.865l1.015 1.777s.4.358 1.6.358z" fill="#92CEFF" />
    </g>
  </svg>
);

const fileRows = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: "Noman",
  modified: "Today",
  members: "1 member",
}));

export default function Dashboard() {
  const [allFilesOpen, setAllFilesOpen] = useState(false);
  const [accordion, setAccordion] = useState("info");
  const [uploadOpen, setUploadOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const closeAll = () => {
    setUploadOpen(false);
    setCreateOpen(false);
    setMoreOpen(false);
  };

  return (
    <div>
      {/* ── Header ── */}
      <header id="headerdashboard" className="bg-white fixed-top">
        <div className="container-fluid px-0 bg-white">
          <div className="header-container d-flex w-100 justify-content-between py-2 px-3">
            <div className="left">
              <i className="fa fa-th mr-3 p-2 pointer" aria-hidden="true" />
              <a href="#">
                <img src="/img/Dropbox_logo_2017.svg" alt="" className="brand-logo-dashboard" />
              </a>
            </div>
            <div className="right d-flex justify-content-end align-items-center">
              <div className="input-dash pr-2">
                <i className="fa fa-search" aria-hidden="true" />
                <input
                  type="search"
                  className="form-control form-control-sm rounded-0 searchbox"
                  placeholder="Search"
                />
              </div>
              <i className="fa fa-question-circle-o p-2 pointer" aria-hidden="true" />
              <i className="fa fa-bell-o p-2 pointer" aria-hidden="true" />
              <img
                src="https://ui-avatars.com/api/?name=Abdullah+Noman"
                alt=""
                style={{ width: 26 }}
                className="rounded-circle ml-2 pointer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* ── Left Sidebar ── */}
      <div className="leftsidenav">
        <div>
          <div className="d-flex flex-column justify-content-between menucontainer">
            <ul className="sidenavul">
              <li className="menu">
                <a href="#">Home</a>
              </li>
              <li className="expandall">
                <div
                  className="d-flex align-items-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => setAllFilesOpen(!allFilesOpen)}
                >
                  <i
                    className="fa fa-chevron-right p-1 pointer"
                    style={{ transition: "transform 0.2s", transform: allFilesOpen ? "rotate(90deg)" : "none" }}
                    aria-hidden="true"
                  />
                  <a href="#" onClick={(e) => e.preventDefault()}>All Files</a>
                </div>
                {allFilesOpen && (
                  <div className="bg-white border content" id="insidecontentsidebar">
                    <ul>
                      <li className="d-flex align-items-center">
                        <i className="fa fa-chevron-right p-1 pointer" aria-hidden="true" />
                        <FolderIcon />
                        <a href="#">Noman</a>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="fa fa-chevron-right p-1 pointer" aria-hidden="true" />
                        <FolderIcon />
                        <a href="#">Sample</a>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li className="menu"><a href="#">Recent</a></li>
              <li className="menu"><a href="#">Starred</a></li>
              <li className="menu"><a href="#">Shared</a></li>
              <li className="menu"><a href="#">File Requests</a></li>
              <li className="menu"><a href="#">Delete Files</a></li>
            </ul>
            <ul>
              <li className="menu"><a href="#">Privacy and legal</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Center Section ── */}
      <div className="centersection" style={{ marginTop: 50 }}>
        <div className="center-content">
          <div className="top-holder">

            {/* Title row */}
            <div className="d-flex align-items-center justify-content-between">
              <div className="centerheader">
                <p>Dropbox</p>
              </div>
              <div className="text-right pr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="menubar" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="downarrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Action buttons */}
            <div className="d-flex align-items-center uploadoption">
              {/* Upload dropdown */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm mr-2 btn-blue rounded-0 px-3 py-1 dropdown-toggle"
                  onClick={() => { closeAll(); setUploadOpen(!uploadOpen); }}
                >
                  <i className="fa fa-upload mr-2" aria-hidden="true" /> Upload
                </button>
                {uploadOpen && (
                  <div className="dropdown-menu show">
                    <a className="dropdown-item" href="#">Files</a>
                    <a className="dropdown-item" href="#">Folder</a>
                  </div>
                )}
              </div>

              <div className="mx-2 text-secondary">|</div>

              {/* Create dropdown */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm mr-2 btn-create dropdown-toggle"
                  onClick={() => { closeAll(); setCreateOpen(!createOpen); }}
                >
                  <i className="fa fa-plus mr-2" aria-hidden="true" /> Create
                </button>
                {createOpen && (
                  <div className="dropdown-menu show">
                    <a className="dropdown-item" href="#">New folder</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Google Docs</a>
                    <a className="dropdown-item" href="#">Google Sheets</a>
                    <a className="dropdown-item" href="#">Google Slides</a>
                  </div>
                )}
              </div>

              {/* More options dropdown */}
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-link btn-sm dropdown-toggle withoutdropicon"
                  onClick={() => { closeAll(); setMoreOpen(!moreOpen); }}
                >
                  <i className="fa fa-ellipsis-h" aria-hidden="true" />
                </button>
                {moreOpen && (
                  <div className="dropdown-menu show">
                    <a className="dropdown-item" href="#">Sort by name</a>
                    <a className="dropdown-item" href="#">Sort by modified</a>
                    <a className="dropdown-item" href="#">Sort by size</a>
                  </div>
                )}
              </div>
            </div>

            {/* Fixed table header */}
            <div>
              <table className="table border-top-0 centertable">
                <thead>
                  <tr>
                    <td className="border-top-0">
                      <input type="checkbox" className="checkbox" />
                    </td>
                    <td className="border-top-0 font-weight-bold">Name</td>
                    <td className="border-top-0">Modified</td>
                    <td className="border-top-0">Members</td>
                  </tr>
                </thead>
              </table>
            </div>
          </div>

          {/* Scrollable file rows */}
          <div className="contain">
            <div className="tablecontent">
              <div className="d-flex flex-column">
                <table className="table filetable">
                  <tbody>
                    {fileRows.map((file) => (
                      <tr key={file.id}>
                        <td><input type="checkbox" className="checkbox" /></td>
                        <td>{file.name}</td>
                        <td>{file.modified}</td>
                        <td>{file.members}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right Sidebar ── */}
      <div className="rightsidenav">
        <div className="d-flex flex-column bg-light" style={{ height: "100vh" }}>
          <div className="h-100">
            <div className="d-flex justify-content-between align-items-center bg-white py-4 px-3 border-bottom">
              <span><h6 className="font-weight-bold">Dropbox</h6></span>
              <i className="fa fa-chevron-right px-2 pointer" aria-hidden="true" />
            </div>

            {/* Accordion */}
            <div id="accordion">
              <AccordionItem
                id="info"
                icon="fa-info-circle"
                label="Info"
                open={accordion === "info"}
                onToggle={() => setAccordion(accordion === "info" ? null : "info")}
              >
                Select a file or folder to see its info here.
              </AccordionItem>

              <AccordionItem
                id="pinned"
                icon="fa-thumb-tack"
                label="Pinned Items"
                open={accordion === "pinned"}
                onToggle={() => setAccordion(accordion === "pinned" ? null : "pinned")}
              >
                No pinned items yet.
              </AccordionItem>

              <AccordionItem
                id="activity"
                icon="fa-folder-open"
                label="Activity"
                open={accordion === "activity"}
                onToggle={() => setAccordion(accordion === "activity" ? null : "activity")}
              >
                Recent activity will appear here.
              </AccordionItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AccordionItem({ icon, label, open, onToggle, children }) {
  return (
    <div className="card" style={{ borderRadius: 0 }}>
      <div className="card-header">
        <h5 className="mb-0 text-black">
          <button
            className={`btn btn-link btn-linkmod pl-0${open ? "" : " collapsed"}`}
            onClick={onToggle}
          >
            <i className={`fa ${icon} mr-2`} aria-hidden="true" /> {label}
          </button>
        </h5>
      </div>
      {open && (
        <div className="collapse show">
          <div className="card-body">{children}</div>
        </div>
      )}
    </div>
  );
}
