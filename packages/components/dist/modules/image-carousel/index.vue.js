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
    const props = defineProps({
        imageUrls: {
            type: Array,
            required: true,
        },
        defaultIndex: {
            type: Number,
            default: 0
        },
    });
    const index = ref(0);
    const layout = () => {
        const offestStep = 100; // 每个图片的偏移量
        const scaleStep = 0.6; // 每个图片的缩放比例
        const opacityStep = 0.6; // 每个图片的透明度
        for (let i = 0; i < props.imageUrls.length; i++) {
            const item = document.querySelector(`.image-items:nth-child(${i + 1})`);
            if (item) {
                const dis = i - index.value; // 下标距离
                let xOffset = dis * offestStep; // 偏移量
                const sign = Math.sign(dis); // 方向
                let rotate = 0; // 旋转角度
                if (i !== index.value) {
                    xOffset = xOffset + sign * 100; // 非当前图片偏移量需要再偏移半个步长
                    rotate = -sign * 45; // 非当前图片旋转角度
                }
                const scale = Math.pow(scaleStep, Math.abs(dis)); // 缩放比例
                item.style.transform = `translateX(${xOffset}px) scale(${scale}) rotateY(${rotate}deg)`;
                const zIndex = props.imageUrls.length - Math.abs(dis); // z-index
                item.style.zIndex = zIndex.toString();
                const opacity = Math.pow(opacityStep, Math.abs(dis)); // 透明度
                item.style.opacity = opacity.toString();
            }
        }
    };
    onMounted(() => {
        index.value = props.defaultIndex;
        layout();
    });
    const prevFn = () => {
        index.value--;
        if (index.value < 0) {
            index.value = 0;
        }
        layout();
    };
    const nextFn = () => {
        index.value++;
        if (index.value > props.imageUrls.length - 1) {
            index.value = props.imageUrls.length - 1;
        }
        layout();
    };
    const itemFn = (i) => {
        index.value = i;
        layout();
    };
    debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "l-image-carousel" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "image-list" }));
    for (const [url, i] of __VLS_getVForSourceType((__VLS_ctx.imageUrls))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign(Object.assign(Object.assign({ onClick: (() => __VLS_ctx.itemFn(i)) }, { class: "image-items" }), { key: (i), src: (url) }), { class: ({ active: __VLS_ctx.index === i }) }));
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.prevFn) }, { class: "prev" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.nextFn) }, { class: "next" }));
    /** @type {__VLS_StyleScopedClasses['l-image-carousel']} */ ;
    /** @type {__VLS_StyleScopedClasses['image-list']} */ ;
    /** @type {__VLS_StyleScopedClasses['image-items']} */ ;
    /** @type {__VLS_StyleScopedClasses['active']} */ ;
    /** @type {__VLS_StyleScopedClasses['prev']} */ ;
    /** @type {__VLS_StyleScopedClasses['next']} */ ;
    var __VLS_dollars;
    const __VLS_self = (yield import('vue')).defineComponent({
        setup() {
            return {
                index: index,
                prevFn: prevFn,
                nextFn: nextFn,
                itemFn: itemFn,
            };
        },
        props: {
            imageUrls: {
                type: Array,
                required: true,
            },
            defaultIndex: {
                type: Number,
                default: 0
            },
        },
        name: 'LImageCarousel'
    });
    return (yield import('vue')).defineComponent({
        setup() {
            return {};
        },
        props: {
            imageUrls: {
                type: Array,
                required: true,
            },
            defaultIndex: {
                type: Number,
                default: 0
            },
        },
        name: 'LImageCarousel'
    });
}))(); /* PartiallyEnd: #4569/main.vue */
