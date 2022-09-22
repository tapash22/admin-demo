<template>
    <v-container>
        <div>
            <DataTable />
        </div>
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