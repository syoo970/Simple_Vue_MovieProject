<template>
  <img
    v-if="!movies.length"
    src="https://vuemovie.s3.ap-northeast-2.amazonaws.com/movieNotFound.png"
    alt="not-found"
  >
  <Swiper
    :navigation="true"
    :slides-per-view="5"
    :modules="modules"
    :space-between="20"
    class="movieCarousel"
  >
    <template
      v-for="movie in movies"
      :key="movie.idmbID"
    >
      <swiper-slide>
        <Cards
          :title="movie.Title"
          :img="movie.Poster"
          @click="handleModal(movie.imdbID)"
        />
      </swiper-slide>
    </template>
  </Swiper>
  <div v-if="movies.length">
    <router-link
      v-show="page !== '1'"
      :to="`/${name}/${parseInt(page)-1}`"
    >
      이전페이지
    </router-link>
    <router-link :to="`/${name}/${parseInt(page)+1}`">
      다음페이지
    </router-link>
  </div>
  <a-modal
    v-model:visible="isModalUp"
    :title="`${currMovieDetail.Title}'s Detail`"
    class="detailModal"
    width="1000px"
    centered
    @ok="isModalUp = false"
  >
    <a-card
      class="detailModal__card"
      style="height: 100%;"
    >
      <div class="detailModal__card--image">
        <a-image
          :width="300"
          heigth="100%"
          :src="currMovieDetail.Poster"
          fallback="https://vuemovie.s3.ap-northeast-2.amazonaws.com/notFound.png"
        />
      </div>
      <div class="detailModal__card--info">
        <p>제목: {{ currMovieDetail.Title }}</p>
        <p>출시년도: {{ currMovieDetail.Released }}</p>
        <p>재생시간: {{ currMovieDetail.Runtime }}</p>
        <p>감독: {{ currMovieDetail.Director }}</p>
        <p>배우: {{ currMovieDetail.Actors }}</p>
        <p>제작사: {{ currMovieDetail.Production }}</p>
        <div class="detailModal__card--info-rating">
          <div>
            <img
              src="https://vuemovie.s3.ap-northeast-2.amazonaws.com/imdb_icon.png"
              alt="imdb"
            >
            <p>{{ currMovieDetail.imdbRating }}</p>
          </div>
          <div>
            <img
              src="https://vuemovie.s3.ap-northeast-2.amazonaws.com/tomato.png"
              alt="tomato"
            >
            <p>{{ tomatoScore }}</p>
          </div>
          <div>
            <img
              src="https://vuemovie.s3.ap-northeast-2.amazonaws.com/Metacritic.png"
              alt="meta"
            >
            <p>{{ currMovieDetail.Metascore }}</p>
          </div>
        </div>
      </div>
    </a-card>
  </a-modal>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import { Navigation } from "swiper";
    import 'swiper/css';
    import "swiper/css/navigation";
    import Cards from '~/components/common/Cards.vue';
    import { getMovieDetail } from '~/api';

    export default {
        components: {
            Swiper,
            SwiperSlide,
            Cards,
        },
        setup() {
          return {
            modules: [Navigation],
          };
        },
        data() {
          return {
            isModalUp: false,
            currMovieDetail: {},
            cardBodyStyle: {
              padding: 0,
              display: 'flex',
            },
          };
        },
        computed: {
            movies() {
                return this.$store.state.movies || [];
            },
            name() {
                return this.$route.params.name;
            },
            page() {
              return this.$route.params.page;
            },
            tomatoScore() {
              if(this.currMovieDetail.Ratings) return this.currMovieDetail.Ratings.find(item => item.Source === 'Rotten Tomatoes')?.Value || 'N/A';
              return '';
            }
        },
        created() {
            this.$watch(
                () => this.$route.params,
                (toParams) => {
                    const { name, page } = toParams;
                    this.$store.dispatch('searchMovie', {title: name, page});
                }
            );
            const { name, page } = this.$route.params;
            this.$store.dispatch('searchMovie', {title: name, page});
        },
        methods: {
          async handleModal(movieId) {
            this.isModalUp = true;
            const res = await getMovieDetail(movieId);
            this.currMovieDetail = { ...res.data };
          },  
        }
    };
</script>

<style lang="scss">
    .detailModal__card {
      & > .ant-card-body {
        padding: 0;
        display: flex;
        gap: 20px;
      }
    }
</style>

<style lang="scss" scoped>
  .swiper {
      &-slide {
        align-self: stretch;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .detailModal__card {
      border: 0;
      &--info {
        &-rating {
          display: flex;
          gap: 10px;
          & > div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
</style>