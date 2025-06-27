/// <reference types="../../node_modules/.vue-global-types/vue_3.5_0_0_0.d.ts" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ref, onMounted } from 'vue';
export default await (() => __awaiter(void 0, void 0, void 0, function* () {
    const __VLS_props = defineProps({
        imageUrls: {
            type: Array,
            required: true,
        }
    });
    const showPointer = ref(false);
    onMounted(() => {
        const pointer = document.querySelector('.pointer');
        const imageItems = document.querySelectorAll('.image-item');
        imageItems.forEach((item, index) => {
            item.addEventListener('mouseenter', (e) => {
                pointer.style.setProperty('--x', `${item.offsetLeft}px`);
                pointer.style.setProperty('--y', `${item.offsetTop}px`);
                pointer.style.setProperty('--w', `${item.offsetWidth}px`);
                pointer.style.setProperty('--h', `${item.offsetHeight}px`);
            });
            showPointer.value = true;
        });
    });
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "l-image-pointer" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "pointer" }));
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, Object.assign(Object.assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.showPointer) }), null, null);
    for (const [url, i] of __VLS_getVForSourceType((__VLS_ctx.imageUrls))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign({ class: "image-item" }, { key: (i), src: (url) }));
    }
    /** @type {__VLS_StyleScopedClasses['l-image-pointer']} */ ;
    /** @type {__VLS_StyleScopedClasses['pointer']} */ ;
    /** @type {__VLS_StyleScopedClasses['image-item']} */ ;
    var __VLS_dollars;
    const __VLS_self = (yield import('vue')).defineComponent({
        setup() {
            return {
                showPointer: showPointer,
            };
        },
        props: {
            imageUrls: {
                type: Array,
                required: true,
            }
        },
        name: 'LImagePointer'
    });
    return (yield import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            imageUrls: {
                type: Array,
                required: true,
            }
        },
        name: 'LImagePointer'
    });
}))(); /* PartiallyEnd: #4569/main.vue */
