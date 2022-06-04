import { Link, Route, Router, Routes } from "react-router-dom";
import Home from "./component/home";
import Product from "./component/product";
import "./style/reset.css";
import "./App.css";
import Category from "./component/category";
import NavTop from "./component/navbar/navTop";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  FolderOpenOutlined,
  ContainerOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import Cart from "./component/cart";
const { Header, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <header>
        <div className="container">
          <NavTop />
        </div>
      </header>
      <main>
        <Layout>
          <Sider className="boxLeft" trigger={true} collapsible collapsed={collapsed}>
            <div className="logo" />
            <nav>
                <ul className="boxList">
                  <li className="boxItem">
                    <Link to="/home"><FolderOpenOutlined /><span>home</span></Link>{" "}
                  </li>
                  <li className="boxItem">
                    <Link to="/product"><FolderOpenOutlined /><span>product</span></Link>
                  </li>
                  <li  className="boxItem">
                    <Link to="/category"><ContainerOutlined /><span>catagory</span></Link>
                  </li>
                  <li className="boxItem">
                    <Link to="/cart"><ShoppingCartOutlined /><span>cart</span></Link>
                  </li>
                </ul>
            </nav>
          </Sider>
          <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: () => setCollapsed(!collapsed),
                }
              )}
            </Header>
            <Content
              className="site-layout-background"
              style={{
                margin: "24px 16px",
                padding: 24,
                minHeight: 280,
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/product" element={<Product />} />
                <Route path="/category" element={<Category />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>

      </main>
    </>
  );
}

export default App;