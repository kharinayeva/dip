<template>

    <section class="">
        <div class="py-4 container">
            <div class="py-1 col-lg-12 col-md-8">
                <h2 class="fw-bold">map</h2>
                <form>

                    <fieldset class="row ">

                        <div class="col-12">

                        </div>
                        <div class="search mt-3 ">
                            <!-- <div class="search__wrap-img">
                                <img class="search__image" src="\assets\LogoSearch.png" alt="SearchLogo">
                            </div> -->
                            <!-- <label for="inputAddress" class="form-label">Введите адрес (город, улица, номер дома)</label> -->
                            <input @keyup.enter="searchAdressFunction()"
                                placeholder="Введите адрес (город, улица, номер дома)" type="text" name="search"
                                id="search" v-model="adress" class="form-control ">
                            <button type="button" @click="searchAdressFunction" class="btn btn-primary  my-3">
                                Показать на карте
                            </button>
                        </div>
                        <legend class="col-form-label col-sm-1 pt-0 "> Радиус</legend>
                        <div class="col-sm-2">
                            <!-- <div class="col-sm-10"></div> -->
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radius" value="100" id="stometrov"
                                    v-model="radius">
                                <label class="form-check-label" for="stometrov">
                                    100 метров
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radius" value="100" id="tristometrov"
                                    v-model="radius">
                                <label class="form-check-label" for="tristometrov">
                                    300 метров
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radius" value="500" id="fivemetrov"
                                    v-model="radius">
                                <label class="form-check-label" for="fivemetrov">
                                    500 метров
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="radius" value="1000" id="onekm"
                                    v-model="radius">
                                <!-- checked -->
                                <label class="form-check-label" for="onekm">
                                    1000 метров
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-1">
                            <legend class="col-form-label col-sm-1 pt-0"> Выберите магазин </legend>
                            <div class="col-sm-10">
                            </div>
                        </div>
                        <div class="col-sm-2">
                            <!-- <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> Наш </label>
                            </div> -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 1 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 2 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 3 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 4 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 5 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 6 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 7 магазин </label>
                            </div>

                        </div><div class="col-sm-3">
                            <!-- <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> Наш </label>
                            </div> -->
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 1 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 2 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 3 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 4 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 5 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 6 магазин </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="nash" name="nash" value="Наш"
                                    v-model="checkShops" />
                                <label class="form-check-label" for="nash"> 7 магазин </label>
                            </div>

                        </div>
                        <div class="col-sm-2">
                            <div class="col-15">
                                <button id="accept_filter_input" class="btn btn-primary"
                                    @click="accepsFilter">Применить</button>
                                <!-- type="submit" -->
                            </div>
                        </div>

                        <div class="download" v-show="downloadButton">
                            <button class="download__btn" type="button" id="download_excel_button"
                                @click="downloadExcel" value="Скачать Excel">
                                <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15,3.41421356 L15,7 L18.5857864,7 L15,3.41421356 Z M19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 L5,3 L5,21 L19,21 L19,9 Z M5,1 L15.4142136,1 L21,6.58578644 L21,21 C21,22.1045695 20.1045695,23 19,23 L5,23 C3.8954305,23 3,22.1045695 3,21 L3,3 C3,1.8954305 3.8954305,1 5,1 Z M11,14.5857864 L11,10 L13,10 L13,14.5857864 L14.2928932,13.2928932 L15.7071068,14.7071068 L12,18.4142136 L8.29289322,14.7071068 L9.70710678,13.2928932 L11,14.5857864 Z"
                                        fill-rule="evenodd" />
                                </svg>
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </section>

</template>