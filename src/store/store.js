import { applyMiddleware, createStore } from "@reduxjs/toolkit";

export const store = createStore(applyMiddleware());