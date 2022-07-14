<template>
    <div>
        <div class="navbar-left">
            <div class="logo">
                <img class="logo-img" src="../assets/logo.svg" />
            </div>
            <ul class="navbar-items">

                <router-link to="/">
                    <li class="navbar-item">
                        <img class="navbar-item-img" src="../assets/home-alt.svg" />
                        <p class="navbar-item-title"> Home </p>
                    </li>
                </router-link>

                <router-link to="/post">
                    <li class="navbar-item">
                        <img class="navbar-item-img" src="../assets/paper-plane.svg" />
                        <p class="navbar-item-title"> Post </p>
                    </li>
                </router-link>

                <router-link to="/activity">
                    <li class="navbar-item">
                        <img class="navbar-item-img" src="../assets/heart.svg" />
                        <p class="navbar-item-title"> Activity </p>
                    </li>
                </router-link>

                <router-link to="/bookmark">
                    <li class="navbar-item">
                        <img class="navbar-item-img" src="../assets/bookmark.svg" />
                        <p class="navbar-item-title"> Bookmark </p>
                    </li>
                </router-link>



            </ul>
        </div>
        <div class="searchBar">
            <label for="inpSearch" class="searchBar-form">
                <img class="searchBar-form-img" src="../assets/search.svg" />
                <div class="searchBar-form-input">
                    <input id="inpSearch" placeholder="Search will seed post" type="text" />
                </div>
            </label>
        </div>
        <div class="user">
            <div class="user-notification">
                <img src="../assets/bell.svg" alt="bell" />
                <div class="reddot"></div>
            </div>
            <div class="user-info">
                <img class="user-info-avatar"
                    src="https://scontent.fhan2-2.fna.fbcdn.net/v/t1.6435-9/207728655_2983190358632671_2376428832399880950_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=kVUSc8UYcigAX_5rZTX&_nc_oc=AQl3YcOT-127Y82oYcFUWB6Ph7NAqGIs2VvT4v_HUBL0xos-gYEWGBkCQ3uaHBu7o2M&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-ViGFUnZ8SjrkRtgryb5Wgsj845KExCJvHttyAo71BIw&oe=62F58D2E"
                    alt="avatar">
                <p class="user-info-name">Trung Lâm</p>
                <div @click="clickUserInfo" class="dropDown">
                    <img src="../assets/caret-down.svg" alt="">
                </div>
                <div class="dropDown-list">
                    <div class="dropDown-list-item">
                        <img class="dropDown-list-item-img" src="../assets/user-circle.svg" />
                        <p class="dropDown-list-item-title">Profile</p>
                    </div>
                    <div class="dropDown-list-item">
                        <img class="dropDown-list-item-img" src="../assets/sign-out.svg" />
                        <p class="dropDown-list-item-title">Log out</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: "MainNavbar",
    data() {
        return {
            displayDropdown: 'none',
        }
    },
    methods: {
        clickUserInfo() {
            if (this.displayDropdown == 'none') {
                this.displayDropdown = 'block'
            } else {
                this.displayDropdown = 'none'
            }
        }
    }
}
</script>

<style>
.navbar-left {
    display: flex;
    width: 40%;
}

.logo {
    margin-left: 32px;
    margin-right: 37px;
    cursor: pointer;
}

.logo-img {
    margin-top: 16px;
}

.navbar-items {
    display: flex;
    height: 40px;
    width: 412px;
    padding-left: 0px;
    padding-right: 50px;
}

router-link {
    text-decoration: none !important;
}

a:-webkit-any-link {
    color: black;
    cursor: pointer;
    text-decoration: none;
}


.navbar-item {
    display: flex;
    height: 32px;
    margin-right: 30px;
    margin-top: 4px;
    cursor: pointer;
}

.navbar-item:hover {
    color: #1c8a8a;
}

.navbar-item-img {
    height: 20px;
    margin-right: 12px;
}

.navbar-item-title {
    font-size: 14px;
    font-weight: 700;
    margin-top: 3px;

}

.searchBar {
    width: 80%;
    text-align: center;
}

.searchBar-form {
    width: 30%;
    background: #F0F0F0;
    border-radius: 54px;
    height: 40px;
    margin-top: 10px;
    text-align: left;
    display: flex;
    margin-left: 35%;
}

.searchBar-form-img {
    height: 14px;
    width: 14px;
    margin: 13px 13px 13px 17px;
    cursor: pointer;
}

.searchBar-form-input {
    height: fit-content;
    margin-top: 8px;
}

.searchBar-form-input input {
    width: 90%;
    outline: none;
    border: none;
    height: 24px;
    font-size: 14px;
    padding-left: 0px;
    color: #A0A0A0;
    background: #F0F0F0;
}

.user {
    display: flex;
    height: 60px;
    width: 20%;
}

.user-notification {
    height: 20px;
    margin-top: 20px;
    margin-right: 23px;
    position: relative;
    cursor: pointer;
}

.reddot {
    position: absolute;
    height: 8px;
    width: 8px;
    background: red;
    border-radius: 50%;
    top: 0;
    right: 0;
}

.user-info {
    display: flex;
    position: relative;
    cursor: pointer;
}

.user-info-avatar {
    margin-top: 14px;
    margin-right: 8px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
}

.user-info-name {
    color: #191919;
    font-size: 14px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
    margin-top: 18px;
    line-height: 24px;
    margin-right: 4px;
}

.dropDown {
    height: 24px;
    width: 24px;
    background: #E0EFEF;
    border-radius: 50%;
    margin-top: 18px;
    cursor: pointer;
    position: relative;
}

.dropDown-list {
    height: 96px;
    width: 230px;
    background: rgb(242, 242, 242);
    position: absolute;
    right: 0px;
    top: 50px;
    border-radius: 4px;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.2);
    background: #FFFFFF;
    display: v-bind(displayDropdown);
}

.dropDown:hover {
    background: #becbcb;
}

.dropDown-list-item {
    display: flex;
    height: 40px;
}

.dropDown-list-item-img {
    height: 16px;
    width: 16px;
    margin-top: 20px;
    margin-right: 16px;
    margin-left: 20px;
}

.dropDown-list-item-title {
    line-height: 24px;
    font-size: 14px;
    font-family: Roboto, sans-serif;
    font-weight: 600;
    margin-top: 16px;
}
</style>