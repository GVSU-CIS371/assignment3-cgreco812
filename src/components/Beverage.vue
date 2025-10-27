<template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      <template v-slot:top v-if="creamer.id !='c1'">
        <Creamer :creamer="creamer"/>
      </template>
      <template v-slot:mid v-if="syrup.id !='s1'">
        <Syrup :syrup="syrup"/>
      </template>
      <template v-slot:bottom>
        <Base :base="base"/>
      </template>
    </Contents>
  </Mug>
</template>
<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  base: any;
  creamer: any;
  syrup: any
};
defineProps<Props>();
</script>
