<template>
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" lg="12" md="12">
                <div class="grey lighten-5 pa-5">
                    <DataTable />
                </div>
            </v-col>
        </v-row>

    </v-container>
</template>

<script>
import DataTable from '@/components/DataTable.vue'

export default {
    components: {
        DataTable,
    }
}
</script>