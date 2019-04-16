
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
import './styles/main_styles.css';
import './styles/responsive.css';
import './styles/bootstrap4/bootstrap.min.css';


class AppHeader extends Component {
    render() {
        return (
            <div class="super_container">
            <header class="header trans_300">
        
                <div class="top_nav">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="top_nav_left">free shipping on all u.s orders over $50</div>
                            </div>
                            <div class="col-md-6 text-right">
                                <div class="top_nav_right">
                                    <ul class="top_nav_menu">
                                        <li class="currency">
                                            
                                            <ul class="currency_selection">
                                                <li><a href="/">cad</a></li>
                                                <li><a href="/">aud</a></li>
                                                <li><a href="/">eur</a></li>
                                                <li><a href="/">gbp</a></li>
                                            </ul>
                                        </li>
                                        <li class="language">
                                            <a href="/">
                                                English
                                                <i class="fa fa-angle-down"></i>
                                            </a>
                                            <ul class="language_selection">
                                                <li><a href="/">French</a></li>
                                                <li><a href="/">Italian</a></li>
                                                <li><a href="/">German</a></li>
                                                <li><a href="/">Spanish</a></li>
                                            </ul>
                                        </li>
                                        <li class="account">
                                            <a href="/"> 
                                                회원페이지
                                                <i class="fa fa-angle-down"></i>
                                            </a>
                                            
                                            { this.props.authenticated ? (
                                            <ul class="account_selection">
                                                <li><NavLink to="/profile">Profile</NavLink> </li>
                                                <li> <a onClick={this.props.onLogout}>Logout</a></li>
                                                <li><NavLink to="/MyInfo">내정보</NavLink> </li>
                                                </ul>
                                                ):(
                                                    <ul class="account_selection">
                                                    <li>  <NavLink to="/login">로그인<i class="fa fa-sign-in" aria-hidden="true"></i></NavLink> </li>
                                                    <li><NavLink to="/signup">가입<i class="fa fa-user-plus" aria-hidden="true"></i></NavLink></li>
                                                    </ul>
                                                )}
                                                
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
                <div class="main_nav_container">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 text-right">
                                <div class="logo_container">
                                    <a href="/">colo<span>shop</span></a>
                                </div>
                                <nav class="navbar">
                                    <ul class="navbar_menu">
                                        <li><a href="/"><h2>메인</h2></a></li>
                                        <li><a href="/"><h2>판매</h2></a></li>
                                        <li><NavLink to="/board"><h2>커뮤니티</h2></NavLink></li>
                                        <li><a href="/"><h2>리뷰</h2></a></li>
                                        <li><a href="/"><h2>blog</h2></a></li>
                                        <li><a href="contact.html">contact</a></li>
                                    </ul>
                                    <ul class="navbar_user">
                                        <li><a href="/"><i class="fa fa-search" aria-hidden="true"></i></a></li>
                                        <li><a href="/"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                                        <li class="checkout">
                                            <a href="/">
                                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                                <span id="checkout_items" class="checkout_items">2</span>
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="hamburger_container">
                                        <i class="fa fa-bars" aria-hidden="true"></i>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
        
            </header>
        
        </div>
        )
    }
}

export default AppHeader;