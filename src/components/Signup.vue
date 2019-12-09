<template>
  <div class="all" id="vue-app">
      <div class="top-bar"></div>
      <div class="main">


        <ul class="menu">
              <li class="li"><button class="button" id="signup-button">註冊</button></li>
              <li class="li"><button class="button" id="login-button">登入</button></li>
        </ul>


        <form class="form" id="signup">
            <div class="field">
                <label>信箱：</label>
                <input id="signup-email" type="email" placeholder="請輸入信箱" class="email" required>
            </div>
            <div class="field">
                <label>密碼：</label>
                <input id="signup-password" type="password" placeholder="請輸入密碼" class="password" required>
            </div>
            <div class="field">
                <input id="signup-submit" type="submit" class="submit" value="送出">
            </div>
        </form>


      </div>
    </div>
</template>

<script>
export default {
  name: 'signup',
};
</script>

<style scoped>

.all{
  height: 100%;
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
}


.top-bar{
  /* top: 80px; */
  left: 0px;
  width: 1280px;
  height: 80px;
  position: relative;
  background: #00BBFF 0% 0% no-repeat padding-box;
  opacity: 1;
}

.main{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  /* top: 80px; */
  left: 0px;
  width: 1280px;
  height: 640px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
}

.menu{
  position: relative;
  /* top: 18px; */
  left: -396px;
  display: flex;
  justify-content: flex-start;


}

.menu .li{

  display: inline;
  margin: 0px 5px;
}

.menu .li #signup-button{
  top: 84px;
  left: 160px;
  width: 120px;
  height: 54px;
  background: #00BBFF 0% 0% no-repeat padding-box;
  border: 2px solid #00BBFF;
  border-radius: 10px 10px 0px 0px;
  opacity: 1;
  letter-spacing: 0;
  color: #000000;
  font-family: 'Noto Sans TC', Regular;
  font-size: 24px;
}

.menu .li #login-button{
  font-family: 'Noto Sans TC', Regular;
  font-size: 24px;
  top: 244px;
  left: 290px;
  width: 120px;
  height: 54px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  border: 1px solid #00BBFF;
  border-radius: 10px 10px 0px 0px;
  opacity: 1;
}

.form{

  top: 216px;
  left: 160px;
  width: 960px;
  height: 420px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  border: 2px solid #00BBFF;
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.field{
  margin: 10px;
  font-size: 24px;
  font-family: 'Noto Sans TC', Regular;
}

.form input{
  height: 36px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  opacity: 1;
  font-size: 24px;
  font-family: 'Noto Sans TC', Regular;
  padding-left: 10px;
}

.form #signup-submit{
  top: 550px;
  left: 590px;
  width: 100px;
  height: 49px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  border: 1px solid #00BBFF;
  border-radius: 10px;
  opacity: 1;
  font-size: 24px;
  font-family: 'Noto Sans TC', Regular;
}

</style>