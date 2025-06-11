"use client";
import React from "react";
import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;
  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Duy Đẹp Trai Cu Bự ©{new Date().getFullYear()} Created by Duydeptraicubu
      </Footer>
    </>
  );
};

export default AdminFooter;
