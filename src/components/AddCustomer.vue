<template>
  <div>
      <form class="form_add">
          <fieldset class="fieldset">
              <legend>Добавление рецепта</legend>
              <div class="form_field">
                  <label for="name">Название</label>
                  <input required class="input_value" id="name" type="text" v-model="name"/>
                </div>
              <div class="form_field">
                  <label for="description">Описание</label>
                  <textarea required v-model="description" class="description_area input_value" id="description" type="text" rows="3" cols="23"/>
                </div>
              <div class="form_field">
                  <label for="time">Время приготовления</label>
                  <input required v-model="time" class="input_value" id="time" type="text"/>
              </div>
              <div  class="form_field" >
                  <label for="ingredient">Ингредиенты</label>
                  <select id="ingredient"  name="ingredient" v-model="selectIngredients" multiple>
                      <option required v-for="ingredient of ingredients" v-bind:value="ingredient.id_recipe"  :key="ingredient.id_recipe">
                          {{ingredient.name}}
                      </option>
                  </select>
              </div>
          </fieldset>
          <button type="button" @click="sendData">Добавить</button>
      </form>
  </div>
</template>

<script>
import ingredients from '../mocks/Ingredient'
import RecipeDataService from '../services/RecipeDataService'

export default {
    name: 'add-recipe',
    data() {
        return {
            ingredients: ingredients,
            name: '',
            description: '',
            time: '',
            selectIngredients: []
        }
    },
    methods: {
        addNewIngredient() {
            this.countIngredient.push(0);
        },
        async sendData() {
           await RecipeDataService.create({
                name: this.name,
                description: this.description,
                time: this.time,
                selectIngredients: this.selectIngredients
            })
        }
    }
}
</script>

<style>

</style>