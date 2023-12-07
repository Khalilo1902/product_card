'use client'
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store/store";

interface IProviderToolkit {
  children: ReactNode;
}

const ProviderToolkit = ({ children }: IProviderToolkit) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderToolkit;
