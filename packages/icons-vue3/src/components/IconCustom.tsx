import { computed, FunctionalComponent } from 'vue';
import Icon from './Icon';

export const IconCustom = (): FunctionalComponent<{ icon: string }> => {
    const icon = computed(async () => {
        const aa = await import('../../assets/svg/empty.svg?raw');
        console.log(aa);
        return aa.default;
    });
    // @ts-ignore
    return (props, context) => <Icon icon={icon} />;
};
