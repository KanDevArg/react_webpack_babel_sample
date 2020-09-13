import React from "react";
import { render } from "react-dom";
import MainContent from "./js/components/Content/MainContent";

const wrapper = document.getElementById("container");
wrapper ? render(<MainContent />, wrapper) : false;
