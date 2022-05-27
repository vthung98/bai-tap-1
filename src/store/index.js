import { createStore } from 'vuex'

export default createStore({
  state: {
    listClass: [
      {
        classld: 1,
        className: 'Lớp A',
      },
      {
        classld: 2,
        className: 'Lớp  B',
      },
      {
        classld: 3,
        className: 'Lớp C',
      },
      {
        classld: 4,
        className: 'Lớp D',
      },
    ],
    listStudent: [
      {
        id: 1, 
        name: 'Nguyễn Văn A',
        birthday: '1/1/2000',     
        classld: 'Lop A',
      },
      {
        id: 2, 
        name: 'Nguyễn Văn A',
        birthday: '1/1/2000',     
        classld: 'Lớp A',
      },
      {
        id: 3, 
        name: 'Nguyễn Văn A',
        birthday: '1/1/2000',     
        classld: 'Lớp A',
      },
      {
        id: 4, 
        name: 'Nguyễn Văn A',
        birthday: '1/1/2000',  
        classld: ' Lớp A',
      },
    ],
    // dataBase: [{classld: 1, className: 'Lớp A', students: [{idS: 1, name: 'Nguyễn văn A', birthday: '1/1/2000'}, 
    // {idS: 2, name: 'Nguyễn văn B', birthday: '1/1/2000'}, 
    // {idS: 3, name: 'Nguyễn văn C', birthday: '1/1/2000'}]},
    // {classld: 1, className: 'Lớp A', students: [{idS: 1, name: 'Nguyễn văn A', birthday: '1/1/2000'}, 
    // {idS: 2, name: 'Nguyễn văn B', birthday: '1/1/2000'}, 
    // {idS: 3, name: 'Nguyễn văn C', birthday: '1/1/2000'}]}]
  
  },
  getters: {
    // listClassView: state => state.dataBase.map(item => ({classld: item.classld, className: item.className})),
    // listClass: state => state.dataBase.map(item => ({students: item.students}))
    listClass: state => state.listClass,
    listStudent: state => state.listStudent,
    totalClass: state => state.listClass.length,
    totalStudent: state => state.listStudent.length,
    listClassName: state => state.listClass.map(item => item.className)
  },
  mutations: {
    ADD_CLASS (state, tenLop) {
      let nId = state.listClass.length + 1
      let lew = {classld: nId, className: tenLop}
      var fgh = state.listClass.push(lew)
    },
    ADD_STUDENT (state, obj) {
      let nID = state.listStudent.length + 1
      let nS = {id: nID, name: obj.nameIp, birthday: obj.birthdayIp, classld: obj.className}
      state.listStudent.push(nS)
    }
  },
  actions: {
  },
  modules: {
  }
})
