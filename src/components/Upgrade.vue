<template>
<v-layout>
  <div id="up">
    <v-btn style="background-color:#FFC600" @click="enableTable">
      View list
    </v-btn>
    <v-btn style="background-color:#1A1A1A;color:white" @click="disableTable">
      Create
    </v-btn>
  </div>
    <!-- eslint-disable -->
    <template>
      <v-data-table :hidden="td" :disabled="td" loading loading-text="Loading... Please wait" dense light :headers="headers" :items="recruiters" sort-by="calories" class="elevation-1">
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title style="color:#2B9EB3">Recruiters</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                  New Item
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.name" label=""></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.calories" label=""></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.fat" label=""></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.carbs" label=""></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.protein" label=""></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancel
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Save
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon style="color:#2B9EB3" small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon style="color:#1A1A1A" small @click="deleteItem(item)">
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">
            Reset
          </v-btn>
        </template>
      </v-data-table>
</template>
</v-layout>
</template>
<script type="text/javascript">
import VueVirtualTable from 'vue-virtual-table';

export default /* eslint-disable */ {
  components: {
    VueVirtualTable,
  },
  data: () => ({
      td: false,
      dialog: false,
      dialogDelete: false,
      name: '',
      phoneNumber: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: null,
      headers: [
        {
          text: 'Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Nom', value: 'nom' },
        { text: 'Prénom', value: 'prenom' },
        { text: 'Email', value: 'email' },
        { text: 'Type', value: 'type' },
        { text: 'Nom entreprises', value: 'nomEntreprise' },
        { text: 'Numero Offre', value: 'numOffre' },
        { text: 'Actions', value: 'actions', sortable: false },

      ],
      recruiters: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      handleSelectionChange(rows) {
        console.log(rows)
      },
      edit(index, row) {
        console.log(index)
      },
      del(index, row) {
        console.log(index)
      },
      initialize () {
        this.recruiters = [
          {id:1,
           nom:"Aitouakli",
           prenom:"Hichem",
           email:"alterhi99@gmail.com",
           type:"Job seeker",
           nomEntreprise:"N/A",
           numOffre:"N/A",

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
          {

          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
      disableTable(){
         this.td = true;
      },
      enableTable(){
        this.td = false;
      },
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.name = ''
        this.phoneNumber = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
      },

    },
};
</script>
<!--
<vue-virtual-table class="table1" border :config="tableConfig" :data="tableData" :height="500" :itemHeight="55" :minWidth="1000" :selectable="true" :enableExport="true" v-on:changeSelection="handleSelectionChange">
  <template slot-scope="scope" slot="actionCommon">
    <button @click="edit(scope.index, scope.row)">
      <v-icon style="color:#0066ff">mdi-pencil</v-icon>
    </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <button @click="del(scope.index, scope.row)">
      <v-icon style="color:#1A1A1A">mdi-delete</v-icon>
    </button>
  </template>
</vue-virtual-table> -->
