<template>
    <div class="card mb-4">
  <div class="card-img-wrapper">
    <img
      class="card-img-top"
      src=""
      alt="mycard"
    />
    <ul class="list-inline member-icons animate text-center">
      <li class="list-inline-item">
        <button class="btn btn-primary">
          <i class="fa fa-user"></i>
        </button>
      </li>
      <li class="list-inline-item">
        <button class="btn btn-primary">
          <i class="fa fa-heart"></i>
        </button>
      </li>
      <li class="list-inline-item">
        <button
          class="btn btn-primary">
          <i class="fa fa-envelope"></i>
        </button>
      </li>
    </ul>
  </div>
  <div class="card-body p-1">
    <h6 class="card-title text-center mb1">
      <i class="fa fa-user"></i> user age user know as 
    </h6>
    <p class="card-text text-muted text-center">user city</p>
  </div>
</div>
</template>
<style scoped>
.card:hover img {
    transform: scale(1.2, 1.2);
    transition-duration: 500ms;
    transition-timing-function: ease-out;
    opacity: 0.7;
}

.card img {
    transform: scale(1.0, 1.0);
    transition-duration: 500ms;
    transition-timing-function: ease-out
}

.card-img-wrapper {
    overflow: hidden;
    position: relative;
}

.member-icons {
    position: absolute;
    bottom: -30%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    opacity: 0;
}

.card-img-wrapper:hover .member-icons {
    bottom: 0;
    opacity: 1;
}

.animate {
    transition: all 0.3s ease-in-out;
}
</style>