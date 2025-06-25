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
import { rgbaToHex } from 'sla-utils';
export default await (() => __awaiter(void 0, void 0, void 0, function* () {
    const props = defineProps({
        content: {
            type: String,
            required: true
        },
    });
    const textEraseArea = ref();
    const bgColor = ref();
    onMounted(() => {
        bgColor.value = rgbaToHex(window.getComputedStyle(textEraseArea.value).backgroundColor);
    });
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    __VLS_ctx.bgColor;
    // CSS variable injection end 
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "l-text-erase-area" }, { ref: "textEraseArea" }));
    /** @type {typeof __VLS_ctx.textEraseArea} */ ;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "content" }));
    (props.content);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "erase" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign({ class: "text" }));
    (props.content);
    /** @type {__VLS_StyleScopedClasses['l-text-erase-area']} */ ;
    /** @type {__VLS_StyleScopedClasses['content']} */ ;
    /** @type {__VLS_StyleScopedClasses['erase']} */ ;
    /** @type {__VLS_StyleScopedClasses['text']} */ ;
    var __VLS_dollars;
    const __VLS_self = (yield import('vue')).defineComponent({
        setup() {
            return {
                textEraseArea: textEraseArea,
                bgColor: bgColor,
            };
        },
        props: {
            content: {
                type: String,
                required: true
            },
        },
        name: 'LTextEraseArea'
    });
    return (yield import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            content: {
                type: String,
                required: true
            },
        },
        name: 'LTextEraseArea'
    });
}))(); /* PartiallyEnd: #4569/main.vue */
