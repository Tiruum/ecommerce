<template>
    <div class="relative" :class="{ 'with-count': showCount }">
        <input v-model="newTag" type="text" :list="id" autocomplete="off" @keydown.enter="addTag(newTag)"
            @keydown.prevent.tab="addTag(newTag)" @keydown.delete="newTag.length || removeTag(tags.length - 1)"
            :style="{ 'padding-left': `${paddingLeft}px` }" class=" block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 p-1" />

        <datalist v-if="options" :id="id">
            <option v-for="option in availableOptions" :key="option" :value="option">
                {{ option }}
            </option>
        </datalist>

        <ul class="tags flex items-center gap-1 m-0 p-0 absolute top-0 bottom-0 max-w-[75%] overflow-x-auto overflow-y-hidden list-none left-1"
            ref="tagsUl">
            <li v-for="(tag, index) in tags" :key="tag"
                class="tag whitespace-nowrap bg-indigo-500 text-white px-2 py-1 rounded-md transition-all"
                :class="{ duplicate: tag === duplicate }">
                {{ tag }}
                <button class="text-white bg-none outline-none border-none cursor-pointer"
                    @click="removeTag(index)">x</button>
            </li>
        </ul>
        <div v-if="showCount" class="count absolute top-1/2 -translate-y-1/2 right-3 block whitespace-nowrap text-sm">
            <span class="bg-slate-200 p-0.5 rounded">{{ tags.length }}</span> tags
        </div>
    </div>
</template>
<script>
import { ref, watch, nextTick, onMounted, computed } from "vue";
export default {
    props: {
        name: { type: String, default: "" },
        modelValue: { type: Array, default: () => [] },
        options: { type: [Array, Boolean], default: false },
        allowCustom: { type: Boolean, default: true },
        showCount: { type: Boolean, default: false },
    },
    setup(props, { emit }) {
        // Tags
        const tags = ref(props.modelValue);
        const newTag = ref("");
        const id = Math.random().toString(36).substring(7);

        const addTag = (tag) => {
            tag = tag.trim();
            if (!tag) return; // prevent empty tag
            // only allow predefined tags when allowCustom is false
            if (!props.allowCustom && !props.options.includes(tag)) return;
            // return early if duplicate
            if (tags.value.includes(tag)) {
                handleDuplicate(tag);
                return;
            }
            tags.value.push(tag);
            newTag.value = ""; // reset newTag
        };
        const removeTag = (index) => {
            tags.value.splice(index, 1);
        };

        // handling duplicates
        const duplicate = ref(null);
        const handleDuplicate = (tag) => {
            duplicate.value = tag;
            setTimeout(() => (duplicate.value = null), 1000);
            newTag.value = "";
        };

        // positioning and handling tag change
        const paddingLeft = ref(10);
        const tagsUl = ref(null);
        const onTagsChange = () => {
            // position cursor
            const extraCushion = 15;
            paddingLeft.value = tagsUl.value.clientWidth + extraCushion;
            // scroll to end of tags
            tagsUl.value.scrollTo(tagsUl.value.scrollWidth, 0);
            // emit value on tags change
            emit("update:modelValue", tags.value);
        };
        watch(tags, () => nextTick(onTagsChange), { deep: true });
        onMounted(onTagsChange);

        // options
        const availableOptions = computed(() => {
            if (!props.options) return false;
            return props.options.filter((option) => !tags.value.includes(option));
        });

        return {
            tags,
            newTag,
            addTag,
            removeTag,
            paddingLeft,
            tagsUl,
            availableOptions,
            id,
            duplicate,
        };
    },
};
</script>
<style scoped>

@keyframes shake {

    10%,
    90% {
        transform: scale(0.9) translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: scale(0.9) translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: scale(0.9) translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: scale(0.9) translate3d(4px, 0, 0);
    }
}

.tag.duplicate {
    background: rgb(235, 27, 27);
    animation: shake 1s;
}

.with-count input {
    padding-right: 60px;
}

.with-count ul {
    max-width: 60%;
}
</style>