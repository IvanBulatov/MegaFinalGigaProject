<script>
export default {
    props: {
        film: Object,
        url: String,
    },
}
</script>
<template>
    <div class="row">
        <div class="col-12 col-lg-8 mb-3">
            <h3 class="trailer fw-bold lh-1 mb-3">{{ film.title }}</h3>
            <div v-if="film.youtube" v-html="film.youtube"></div>
            <img v-else :src="url + '/' + film.preview" class="d-block img-fluid  mb-3" loading="lazy">

            <div class="lead d-flex justify-content-between">
                <div class="likes">
                    Рейтинг фильма: {{ film.rating }}
                    <img class="star" :src="url + '/icons/star.svg'" alt="">
                </div>
            </div>
        </div>

        <div class="col-12 col-lg-4 mb-3">
            <h3>О фильме:</h3>
            <div class="lead">
                    {{ film.description }}
            </div>
        </div>

        <!-- <div class="col-12 col-lg-4 mb-3">
            <h3>Другие фильмы: </h3>


            <div class="card mb-3" v-for="film in films">
                <img :src="url + '/' + film.preview" class="film-preview" loading="lazy">
                <div class="card-footer text-muted">
                    <h5 class="card-title">
                        <a class="card-link film-title">
                            {{ film.title }}
                        </a>
                    </h5>
                    <div class="d-flex justify-content-between">
                        <div>
                            Рейтинг фильма: {{ film.rating }}
                            <img class="star":src="url + '/icons/star.svg'" alt="">
                        </div>
                    </div>
                </div>
            </div>

        </div> -->
    </div>
</template>

<style>
/* .trailer {
    max-height: 1000px;
    max-width: 1000px;
} */

.star {
    height: 25px;
    margin-bottom: 5px;
}
</style>