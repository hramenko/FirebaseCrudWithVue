<template>
  <div id="app">
    <h1>Basic CRUD in Vue with Firebase</h1>
    <hr>
    <br><br>
    <div>
      <label>
        Name:
      </label>
      <input type="text" v-model="name"/>
      <button @click="submitName">Add</button>
    </div>
    <div>
      <ul>
        <li v-for="personName in names" :key="personName['.key']">
          <div v-if="!personName.edit">
            <p>{{personName.name}}</p>
            <button @click="removePerson(personName['.key'])">Remove</button>
            <button @click="editPerson(personName['.key'])">Edit</button>
          </div>
          <div v-else>
            <input type="text" v-model="personName.name">
            <button @click="saveEdit(personName)">Save</button>
            <button @click="cancelEdit(personName['.key'])">Cancel</button>
          </div>    
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {namesRef} from './firebase';

export default {
  data () {
    return {
      name: ''
    }
  },
  firebase:{
     names:namesRef
  },
  methods:{
    submitName:function(){
      namesRef.push({name:this.name,edit:false});
      this.name=""
    },
    removePerson:function(key){
      namesRef.child(key).remove();
    },
    editPerson:function(key){
      namesRef.child(key).update({edit:true})
    },
    saveEdit:function(personName){
      const key = personName['.key']
      namesRef.child(key).set({name:personName.name,edit:false})
    },
    cancelEdit:function(key){
      namesRef.child(key).update({edit:false})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}

button{
  background-color:transparent;
  border:2px solid black;
}

.button{
  display:block;
  margin:auto;
  margin-top:11px;
}
</style>
