import React, { Component } from 'react';

class HearderAdmin extends Component {
    render() {
        return (
            <div>
                 <ul
              className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar"
            >
              <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href="index.html"
              >
                <div className="sidebar-brand-icon">
                  <i class="fas fa-users-cog" />
                </div>
                <div className="sidebar-brand-text mx-3"> quản trị</div>
              </a>

              <hr className="sidebar-divider my-0" />

              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/admin_category">
                  &ensp;
                  <i class="far fa-copyright" />
                  &ensp;
                  <span>Nhóm sản phẩm</span>
                </a>
              </li>

              <hr className="sidebar-divider my-0" />

              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/admin_product">
                  &ensp;
                  <i class="fab fa-product-hunt" />
                  &ensp;
                  <span>Sản phẩm</span>
                </a>
              </li>

              <hr className="sidebar-divider my-0" />

              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/admin-user">
                  &ensp;
                  <i class="fas fa-user" />
                  &ensp;
                  <span>Tài khoản</span>
                </a>
              </li>

              <hr className="sidebar-divider my-0" />

              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/admin-news">
                  &ensp;
                  <i class="far fa-newspaper" />
                  &ensp;
                  <span>Tin tức </span>
                </a>
              </li>

              <hr className="sidebar-divider my-0" />

              
              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/admin-order">
                  &ensp;
                  <i class="far fa-newspaper" />
                  &ensp;
                  <span> Đặt hàng</span>
                </a>
              </li>

              <hr className="sidebar-divider my-0" />

              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/admin-report">
                  &ensp;
                  <i class="fas fa-exclamation-circle"></i>
                  &ensp;
                  <span> Báo cáo & Góp ý</span>
                </a>
              </li>
              <hr className="sidebar-divider my-0" />
              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/admin-policy">
                  &ensp;
                  <i class="fas fa-exclamation-circle"></i>
                  &ensp;
                  <span> Quản lý các trang</span>
                </a>
              </li>

              <hr className="sidebar-divider my-0" />

              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/">
                  &ensp;
                  <i class="fas fa-home" />
                  &ensp;
                  <span> Trang chủ</span>
                </a>
              </li>

              <hr className="sidebar-divider my-0" />
            </ul>
            {/* End of Sidebar */}
            {/* Content Wrapper */}
            </div>
        );
    }
}

export default HearderAdmin;