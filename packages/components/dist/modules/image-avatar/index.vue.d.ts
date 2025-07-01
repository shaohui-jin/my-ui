import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        default: string;
    };
    uploadFn: {
        type: PropType<(file: File) => void>;
        default: () => void;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    src: {
        type: StringConstructor;
        default: string;
    };
    uploadFn: {
        type: PropType<(file: File) => void>;
        default: () => void;
    };
}>> & Readonly<{}>, {
    src: string;
    uploadFn: (file: File) => void;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
