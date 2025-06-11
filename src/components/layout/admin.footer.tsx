"use client";
import { Layout } from "antd";

const AdminFooter = () => {
  const { Footer } = Layout;

  return (
    <>
      <Footer style={{ textAlign: "center" }}>
        Duy Đẹp Trai Cu Bự ©{new Date().getFullYear()} Created by
        @duydeptraicubu
      </Footer>
    </>
  );
};

export default AdminFooter;
