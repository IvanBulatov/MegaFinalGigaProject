<script>
import axios from "axios"
import FilmPage from "./FilmPage.vue";
axios.defaults.baseURL = "http://localhost:3000";

export default {
    components: {
        FilmPage
    },
    data() {
        return {
            title: '',
            films: [],
            film: {},
            isFilm: false,
            url: axios.defaults.baseURL,
        };
    },
    methods: {
        async loadFilms() {
            let response = await axios.get(`/films`, {
                params: {
                    title: this.title
                }
            })
            this.films = response.data;
            this.isFilm = false;
        },
        async toFilm(id) {
            let response = await axios.get(`/film`, {
                params: {
                    id: id
                }
            });
            this.film = response.data.film;
            this.isFilm = true;

            // this.$router.push({
            //     name: 'film'
            // })
        }
    },
    mounted() {
        this.loadFilms()
    }
}
</script>

<template>
    <div class="container">
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a @click="loadFilms"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">КиноТикс</span>
            </a>

            <!-- ПОИСК -->
            <form @submit.prevent="loadFilms">
                <!-- Название  -->
                <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Название фильма" v-model="title">
                </div>
                <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-warning">Найти</button>
                </div>
            </form>
        </header>
    </div>

    <main>
        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3" v-if="!isFilm">
                <!-- Цикл сразу в шаблоне  -->
                <div class="col" v-for="film in films">
                    <div class="card">
                        <img :src="url + '/' + film.preview" class="film-preview" loading="lazy">
                        <div class="card-footer text-muted">
                            <h5 class="card-title">
                                <a @click="toFilm(film._id)" class="card-link film-title">
                                    {{ film.title }}
                                </a>
                            </h5>
                            <div class="d-flex justify-content-between">
                                <div class="rating">
                                    Рейтинг фильма: {{ film.rating }}
                                    <img class="star" :src="url + '/icons/star.svg'" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <film-page v-if="isFilm" :url="url" :film="film"></film-page>
        </div>
    </main>
</template>

<style>
.star {
    height: 25px;
    margin-bottom: 5px;
}

.card {
    overflow: hidden;
}

a {
    cursor: pointer;
}

.film-preview {
    max-height: 600px;
    max-width: 420px;
    object-fit: cover;
}

.film-title,
.film-author {
    text-decoration: none;
    color: black;
}

.film-title:hover,
.film-author:hover {
    text-decoration: underline;
    color: #0d6efd;
}

.rating {
    width: 200px;
}

iframe {
    width: 100%;
}
</style>