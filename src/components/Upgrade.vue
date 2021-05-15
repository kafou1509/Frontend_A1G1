<template>
<v-layout>
  <vue-virtual-table
    :config="tableConfig"
    :data="tableData"
    :height="800"
    :itemHeight="55"
    :minWidth="1000"
    :selectable="true"
    :enableExport="true"
    v-on:changeSelection="handleSelectionChange"
    dark
  >
    <template slot-scope="scope" slot="actionCommon">
      <button @click="edit(scope.index, scope.row)">
        <v-icon style="color:black">mdi-pencil</v-icon>
      </button>
      <button @click="del(scope.index, scope.row)">
        <v-icon style="color:black">mdi-delete</v-icon>
      </button>
    </template>
  </vue-virtual-table>
</v-layout>
</template>
<script type="text/javascript">
import VueVirtualTable from 'vue-virtual-table';

export default/* eslint-disable */ {
  components: {
    VueVirtualTable
  },
  data: () => ({
      tableConfig: [
        { prop: 'id', name: 'id', width: 80 },
        {
          prop: 'nom',
          name: 'Nom',
          searchable: true,
          sortable: true,
          summary: 'COUNT'
        },
        { prop: 'prenom', name: 'Prénom', numberFilter: true },
        { prop: 'email', name: 'Email', filterable: true },
        { prop: 'type', name: 'Type', filterable: true},
        { prop: 'entr', name: 'Entreprise', filterable: true},
        { prop: 'numoffre', name: 'Numoffre', filterable: true},
        { prop: '_action', name: 'Action', actionName: 'actionCommon' }
      ],
      tableData: [
        { nom: 'a1', prenom: 'a11', email: 'aaaa', type:"aaaaa", entre:"eaaaa", numoffre:10  },
        { nom: 'a1', prenom: 'a11', email: 'aaaa', type:"aaaaa", entre:"eaaaa", numoffre:10  },
        { nom: 'a1', prenom: 'a11', email: 'aaaa', type:"aaaaa", entre:"eaaaa", numoffre:10  }
      ]
    }),
  methods: {
    handleSelectionChange(rows){
      console.log(rows)
    },
    edit(index, row){
      console.log(index)
    },
    del(index, row){
      console.log(index)
    }
  },
};
</script>
