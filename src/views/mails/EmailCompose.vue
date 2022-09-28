<template>
    <v-container>
        <v-row>
            <v-col>
                <div>
                    <v-card>
                        <v-form>
                            <v-card-title>
                                <v-text-field placeholder="TO" outlined dense></v-text-field>
                            </v-card-title>
                            <v-card-subtitle>
                                <v-text-field placeholder="subject" outlined dense></v-text-field>
                            </v-card-subtitle>
                            <v-card-text>
                                <v-textarea clearable clear-icon="mdi-close-circle" placeholder="Description" auto-grow
                                    outlined rows="5" row-height="35">
                                </v-textarea>
                            </v-card-text>
                            <v-card-actions class="mt-n8">
                                <v-btn class="mx-2 my-2" depressed color="primary">
                                    send
                                </v-btn>

                            </v-card-actions>
                        </v-form>

                    </v-card>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>