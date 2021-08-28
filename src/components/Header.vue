<template>
  <div>
    <ul class="navbar navbar-expand-lg navbar-light bg-primary">
      <li class="nav-link">
        <router-link to="/">
          HOME
        </router-link>
      </li>
      <li class="nav-link">
        <router-link to="/first">
          FIRST
        </router-link>
      </li>
      <li class="nav-link">
        <router-link to="/second">
          SECOND
        </router-link>
      </li>
    </ul>
  </div>
</template>



<style lang="scss" scoped> 

a{
  color:whitesmoke;
  font-weight: bold;
  text-decoration-line: none;
}

</style>
