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
            type: [Number, String],
            default: 100
        },
        content: {
            type: String,
            default: 'ashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznl' +
                'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq' +
                'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq' +
                'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq'
        },
        padding: {
            type: [Number, String],
            default: 10
        }
    });
    const computedHeight = computed(() => {
        return typeof props.height === 'number'
            ? props.height + 'px'
            : /\d+(\.\d+)?px/.exec(props.height)
                ? props.height
                : '100px';
    });
    const computedPadding = computed(() => {
        return typeof props.padding === 'number'
            ? props.padding + 'px'
            : /\d+(\.\d+)?px/.exec(props.padding)
                ? props.padding
                : '10px';
    });
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    __VLS_ctx.computedPadding;
    __VLS_ctx.computedHeight;
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
            };
        },
        props: {
            height: {
                type: [Number, String],
                default: 100
            },
            content: {
                type: String,
                default: 'ashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznl' +
                    'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq' +
                    'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq' +
                    'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq'
            },
            padding: {
                type: [Number, String],
                default: 10
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
                type: [Number, String],
                default: 100
            },
            content: {
                type: String,
                default: 'ashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznl' +
                    'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq' +
                    'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq' +
                    'rqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrqashodasidhokznlrq'
            },
            padding: {
                type: [Number, String],
                default: 10
            }
        },
        name: 'LTextOverflowArea'
    });
}))(); /* PartiallyEnd: #4569/main.vue */
