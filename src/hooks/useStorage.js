import React, { useState } from "react";

function useStorage() {
  const setStoreData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  const getStoreData = (key) => {
    return localStorage.getItem(key);
  };
  const removeStoreData = () => {
    localStorage.clear()
  }
  return [setStoreData, getStoreData, removeStoreData];
}

export default useStorage;
