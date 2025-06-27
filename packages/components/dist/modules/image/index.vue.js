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
import { onMounted } from 'vue';
export default await (() => __awaiter(void 0, void 0, void 0, function* () {
    const __VLS_props = defineProps({
        src: {
            type: String,
            required: true,
            // default: 'https://picsum.photos/seed/picsum/200/300',
        },
    });
    const range = [-10, 10]; // Range for rotation in degrees
    const getRotation = (range, mousePos, length) => {
        // (r - range[0]) / (range[1] - range[0]) = mousePos / length
        return range[0] + (range[1] - range[0]) * (mousePos / length);
    };
    onMounted(() => {
        const image = document.querySelector('.l-image');
        image.addEventListener('mousemove', (e) => {
            const { offsetX, offsetY } = e;
            const { width, height } = image.getBoundingClientRect();
            const rx = getRotation(range, offsetY, height);
            const ry = -getRotation(range, offsetX, width);
            image.style.setProperty('--rx', `${rx}deg`);
            image.style.setProperty('--ry', `${ry}deg`);
        });
        image.addEventListener('mouseleave', () => {
            image.style.setProperty('--rx', '0deg');
            image.style.setProperty('--ry', '0deg');
        });
    });
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign({ class: "l-image" }, { src: (__VLS_ctx.src) }));
    /** @type {__VLS_StyleScopedClasses['l-image']} */ ;
    var __VLS_dollars;
    const __VLS_self = (yield import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            src: {
                type: String,
                required: true,
                // default: 'https://picsum.photos/seed/picsum/200/300',
            },
        },
        name: 'LImage'
    });
    return (yield import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            src: {
                type: String,
                required: true,
                // default: 'https://picsum.photos/seed/picsum/200/300',
            },
        },
        name: 'LImage'
    });
}))(); /* PartiallyEnd: #4569/main.vue */
