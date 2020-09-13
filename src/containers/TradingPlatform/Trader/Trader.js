import React from "react";

import Balances from "./Balances/Balances";

import Card from "../../../components/UI/Card/Card";

class Trader extends React.Component {
  render() {
    return (
      <Card extraClasses="flex-fill bd-highlight">
        <div className="card-header py-2">
          <div
            className="d-inline-block"
            id="trader"
            data-toggle="dropdown"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-cash-stack"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 3H1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1h-1z" />
              <path
                fill-rule="evenodd"
                d="M15 5H1v8h14V5zM1 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H1z"
              />
              <path d="M13 5a2 2 0 0 0 2 2V5h-2zM3 5a2 2 0 0 1-2 2V5h2zm10 8a2 2 0 0 1 2-2v2h-2zM3 13a2 2 0 0 0-2-2v2h2zm7-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
            </svg>
          </div>
          <div className="dropdown-menu" aria-labelledby="trader">
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Action
            </a>
            <a class="dropdown-item" href="#">
              Action
            </a>
          </div>
          <div
            className="d-inline-block ml-2"
            style={{ verticalAlign: "middle" }}
          >
              Balances
          </div>
        </div>
        <Balances />
      </Card>
    );
  }
}

export default Trader;
