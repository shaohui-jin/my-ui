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
import { computed } from 'vue';
export default await (() => __awaiter(void 0, void 0, void 0, function* () {
    const props = defineProps({
        height: {
            type: Number,
            default: 100
        },
        content: {
            type: String,
            required: true
        },
        padding: {
            type: Number,
            default: 10
        },
        width: {
            type: Number,
            default: 100
        }
    });
    const computedHeight = computed(() => props.height + 'px');
    const computedPadding = computed(() => props.padding + 'px');
    const computedWidth = computed(() => props.width + 'px');
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    __VLS_ctx.computedWidth;
    __VLS_ctx.computedPadding;
    __VLS_ctx.computedHeight;
    __VLS_ctx.computedHeight;
    __VLS_ctx.computedPadding;
    // CSS variable injection end 
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "l-text-overflow-area" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "text-container" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "more" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "content" }));
    (props.content);
    /** @type {__VLS_StyleScopedClasses['l-text-overflow-area']} */ ;
    /** @type {__VLS_StyleScopedClasses['text-container']} */ ;
    /** @type {__VLS_StyleScopedClasses['more']} */ ;
    /** @type {__VLS_StyleScopedClasses['content']} */ ;
    var __VLS_dollars;
    const __VLS_self = (yield import('vue')).defineComponent({
        setup() {
            return {
                computedHeight: computedHeight,
                computedPadding: computedPadding,
                computedWidth: computedWidth,
            };
        },
        props: {
            height: {
                type: Number,
                default: 100
            },
            content: {
                type: String,
                required: true
            },
            padding: {
                type: Number,
                default: 10
            },
            width: {
                type: Number,
                default: 100
            }
        },
        name: 'LTextOverflowArea'
    });
    return (yield import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            height: {
                type: Number,
                default: 100
            },
            content: {
                type: String,
                required: true
            },
            padding: {
                type: Number,
                default: 10
            },
            width: {
                type: Number,
                default: 100
            }
        },
        name: 'LTextOverflowArea'
    });
}))(); /* PartiallyEnd: #4569/main.vue */
