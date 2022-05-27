<template>
  <div class="container">
    <div class="content">
      <el-table :data="listClass" border style="width: 100%">
        <el-table-column prop="classld" label="Stt" width="180" />
        <el-table-column prop="className" label="Lớp" />
      </el-table>
      <button class="btn-show" @click="showPopUp">Thêm lớp</button>
      <div class="popUp" v-if="isShow">
        <div class="popUp-header"><span>Nhập thông tin lớp</span></div>
        <div class="popUp-container-input">
          <input type="text" v-model="tenLop">
        </div>
        <div class="popUp-container-button">
          <button class="popUp-container-button-agree" @click="themLop(tenLop)">Đồng ý</button>
          <button class="popUp-container-button-cancel" @click="showPopUp">Hủy</button>
        </div>
      </div>
    </div>
    
  </div>
  
</template>

<script >

import {  mapGetters, mapMutations } from 'vuex'
export default {
  name: 'ClassView',
  computed: {...mapGetters(['listClass', 'listClassName']),...mapMutations(['ADD_CLASS'])},
  
  data () {return {isShow: false}},
  methods: {
        
        showPopUp () {
          this.isShow = !this.isShow
          console.log(this.listClassName)
        },
        themLop (tenLop) {
          if (!this.listClassName.includes(tenLop)) {
            this.$store.commit('ADD_CLASS', tenLop)
            this.isShow = !this.isShow
          } else {this.isShow = !this.isShow}
        }
    }
}



</script> 

<style scoped>

.content {
  position: relative;
  margin: 100px 40px 20px 40px;
}
.btn-show {
  position: absolute;
  top: -40px;
  right: 10%;
}

.popUp {
    position: absolute;
    background-color: #eeeeee;
    border: 1px solid #999999;
    width: 300px;
    height: 250px;
    top: 100px;
    left: 50%;
    transform: translateX(-50%) translateY(-100px);
    z-index: 4;
}
.popUp-header {
  display: flex;
  height: 20%;
}
.popUp-header span {
  margin: auto;

}
.popUp-container-input {
  height: 60%;
  display: flex;
}
.popUp-container-input input {
  margin: auto;
  border-radius: 3px;
  border-width: 1px;
}

.popUp-container-button {
  display: flex;  
  height: 20%;
  align-items: center;
  justify-content: flex-end;
}
.popUp-container-button-agree {
  border-radius: 3px;
  border-width: 1px;
}
.popUp-container-button-cancel {
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 3px;
  border-width: 1px;
}
</style>
