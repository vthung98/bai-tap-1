<template>
  <div class="container">
        <div class="content">
            <el-table :data="listStudent" border style="width: 100%" >
                <el-table-column prop="id" label="STT" width="180" />
                <el-table-column prop="name" label="Tên học sinh" width="180" />
                <el-table-column prop="birthday" label="Ngày sinh" />
                <el-table-column prop="classld" label="Tên lớp" />
            </el-table>
            <button @click="showPopUp" class="btn-show">Thêm học sinh</button>
            <div class="popUp" v-if="isShow">
                <div class="popUp-header" ><span>Nhập thông tin học sinh</span></div>
                <div class="popUp-container-input">
                    <input type="text" name="ipn" placeholder="Nhập tên" v-model="nameIp">
                    <input type="text" name="ipb" placeholder="Nhập ngày sinh" v-model="birthdayIp">
                    <el-select v-model="className" clearable placeholder="Chọn lớp">
                        <el-option
                        v-for="item in listClass"
                        :key="item.classld"
                        :label="item.className"
                        :value="item.className"
                        />
                    </el-select>
                </div>
                <div class="popUp-container-button">
                    <button class="popUp-container-button-agree" @click="themHocSinh(nameIp, birthdayIp, className)">Đồng ý</button>
                    <button class="popUp-container-button-cancel" @click="showPopUp">Hủy</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import {  mapGetters, mapMutations } from 'vuex'
import { ref } from 'vue'
export default {
    name: 'StudentsView',
    computed: {...mapGetters(['listStudent', 'listClass']), ...mapMutations(['ADD_STUDENT'])},
    data () {return {isShow: false, classld: ref('')}},
    methods: {
        showPopUp() {
          this.isShow = !this.isShow
        },
        themHocSinh (nameIp, birthdayIp, className) {
          let obj = {nameIp: nameIp, birthdayIp: birthdayIp, className:className}
          this.$store.commit('ADD_STUDENT', obj)
          this.isShow = !this.isShow
        }
    }
}


</script>

<style scoped>
.content {
  position: relative;
    margin: 100px 30px 20px 30px;
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
    height: 350px;
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
  margin: 0px 30px;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  
}
.popUp-container-input input {
    
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