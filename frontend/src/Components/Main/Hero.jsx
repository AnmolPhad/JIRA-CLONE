import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const initialIssues = [
  {
    id: 1,
    key: "JIRA-1",
    title: "Create login page",
    status: "BACKLOG",
    type: "TASK",
    priority: "MEDIUM",
    assignee: "AP",
    reporter: "1",
    description: "",
    labels: [],
    dueDate: "",
  },
  {
    id: 2,
    key: "JIRA-2",
    title: "Fix navbar bug",
    status: "IN PROGRESS",
    type: "BUG",
    priority: "HIGH",
    assignee: "RK",
    reporter: "1",
    description: "",
    labels: [],
    dueDate: "",
  },
  {
    id: 3,
    key: "JIRA-3",
    title: "Dashboard UI",
    status: "DONE",
    type: "STORY",
    priority: "LOW",
    assignee: "AS",
    reporter: "1",
    description: "",
    labels: [],
    dueDate: "",
  },
];

function Hero() {
  const [issues, setIssues] = useState(() => {
    const savedIssues = localStorage.getItem("issues");

    if (savedIssues) {
      return JSON.parse(savedIssues);
    }

    return initialIssues;
  });

  useEffect(() => {
    localStorage.setItem("issues", JSON.stringify(issues));
  }, [issues]);

  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <Navbar
        issues={issues}
        setIssues={setIssues}
      />

      <Sidebar />

      <main className="ml-[304px] px-8 py-6">
        <div className="max-w-[1200px]">
          <Outlet context={{ issues, setIssues }} />
        </div>
      </main>
    </div>
  );
}

export default Hero;